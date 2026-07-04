const bcrypt = require("bcrypt");
const { getPool } = require("../connection/connectdb");

const signup = async (req, res) => {
    console.log(req.body);
  const {
    name,
    email,
    password,
    phone,
    address,
    department,
    designation,
    employee_role,
    joining_date,
    profile_image,
    status,
  } = req.body;

  // ==========================
  // Validation
  // ==========================

  if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !department ||
    !designation ||
    !joining_date
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address.",
    });
  }

  // Password Validation
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters.",
    });
  }

  // Phone Validation
  if (!/^[0-9]{10}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Phone number must be 10 digits.",
    });
  }

  // Role Validation
  const validRoles = ["admin", "employee"];

  const role = employee_role
    ? employee_role.toLowerCase()
    : "employee";

  if (!validRoles.includes(role)) {
    return res.status(400).json({
      success: false,
      message: "Invalid employee role.",
    });
  }

  // Status Validation
  const validStatus = ["Active", "Inactive"];

  const employeeStatus = status || "Active";

  if (!validStatus.includes(employeeStatus)) {
    return res.status(400).json({
      success: false,
      message: "Invalid employee status.",
    });
  }

  try {
    const db = getPool();

    // ==========================
    // Check Email
    // ==========================

    const [existing] = await db.query(
      "SELECT employee_id FROM employees WHERE email=?",
      [email.trim().toLowerCase()]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    // ==========================
    // Hash Password
    // ==========================

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // ==========================
    // Insert Employee
    // ==========================

    const sql = `
        INSERT INTO employees
        (
            name,
            email,
            password,
            phone,
            address,
            department,
            designation,
            employee_role,
            joining_date,
            profile_image,
            status
        )
        VALUES
        (
            ?,?,?,?,?,?,?,?,?,?,?
        )
    `;

    const [result] = await db.query(sql, [
      name.trim(),
      email.trim().toLowerCase(),
      hashedPassword,
      phone.trim(),
      address.trim(),
      department.trim(),
      designation.trim(),
      role,
      joining_date,
      profile_image || null,
      employeeStatus,
    ]);

    return res.status(201).json({
      success: true,
      message: "Employee registered successfully.",
      employee_id: result.insertId,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = signup;