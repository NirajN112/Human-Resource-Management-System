const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getPool } = require('../connection/connectdb');
require('dotenv').config();

const signin = async (req, res) => {
    const { email, password } = req.body;
console.log(req.body);

    // 1. Basic Fields Check
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const db = getPool();

        // 2. Fetch the user by email (include employee_id, role, and the hashed password)
        const findUserQuery = 'SELECT employee_id, name, email, password, employee_role FROM employees WHERE email = ?';
        const [users] = await db.query(findUserQuery, [email.trim().toLowerCase()]);

        // 3. If user doesn't exist
        if (users.length === 0) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const user = users[0];

        // 4. Compare the incoming password with the stored hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        
        if (!isPasswordMatch) {
            // Security Best Practice: Use the exact same error message as above so hackers don't know which one was wrong
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // 5. Generate a JWT token valid for 1 day
        const token = jwt.sign(
            { employeeId: user.employee_id, role: user.employee_role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        // 6. Send success response along with token and user info (excluding password)
        return res.status(200).json({
            message: "Signin successful!",
            token,
            user: {
                employeeId: user.employee_id,
                name: user.name,
                email: user.email,
                role: user.employee_role
            }
        });

    } catch (error) {
        console.error("Signin Error:", error);
        return res.status(500).json({ message: "Internal server error. Please try again later." });
    }
};

module.exports = signin ;