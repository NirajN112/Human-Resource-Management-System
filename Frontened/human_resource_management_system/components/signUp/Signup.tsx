import React, { useRef, useState } from "react";
import {
  Loader2,
  Mail,
  Lock,
  User,
  Phone,
  X,
  Building2,
  Briefcase,
  MapPin,
  Calendar,
  Image,
} from "lucide-react";

interface SignupProps {
  close: () => void;
}

const Signup: React.FC<SignupProps> = ({ close }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const nameRef = useRef<string>("");
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");
  const phoneRef = useRef<string>("");
  const addressRef = useRef<string>("");
  const departmentRef = useRef<string>("");
  const designationRef = useRef<string>("");
  const roleRef = useRef<string>("employee");
  const joiningDateRef = useRef<string>("");
  const profileImageRef = useRef<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const formData = new FormData();

    formData.append("name", nameRef.current);
    formData.append("email", emailRef.current);
    formData.append("password", passwordRef.current);
    formData.append("phone", phoneRef.current);
    formData.append("address", addressRef.current);
    formData.append("department", departmentRef.current);
    formData.append("designation", designationRef.current);
    formData.append("employee_role", roleRef.current);
    formData.append("joining_date", joiningDateRef.current);

    if (profileImageRef.current) {
      formData.append("profile_image", profileImageRef.current);
    }

    try {
      console.log(formData);
      
      const res = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({    name:nameRef.current,
    email:emailRef.current,
    password:passwordRef.current,
    phone:phoneRef.current,
    address:addressRef.current,
    department:departmentRef.current,
    designation:designationRef.current,
    employee_role:roleRef.current,
    joining_date:joiningDateRef.current,
    profile_image:"https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
    }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Employee Registered Successfully");
        formRef.current?.reset();
        profileImageRef.current = null;
      } else {
        setMessage(data.message || "Registration Failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isSuccess =
    message.toLowerCase().includes("success") ||
    message.toLowerCase().includes("registered");

  const inputStyle =
    "w-full rounded-lg border border-gray-600 bg-gray-700 pl-10 pr-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-green-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-gray-800 p-8 border border-gray-700 shadow-xl">
        {/* Close Button */}
        <div className="flex justify-end">
          <X
            className="cursor-pointer text-white hover:text-red-400"
            onClick={close}
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-green-400">
          Employee Registration
        </h1>

        <p className="text-center text-gray-400 mb-6">Register New Employee</p>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className={inputStyle}
              onChange={(e) => (nameRef.current = e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              required
              className={inputStyle}
              onChange={(e) => (emailRef.current = e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-4 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              required
              className={inputStyle}
              onChange={(e) => (passwordRef.current = e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Phone Number"
              required
              className={inputStyle}
              onChange={(e) => (phoneRef.current = e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="relative">
            <MapPin className="absolute left-3 top-4 text-gray-400" />
            <textarea
              rows={3}
              placeholder="Address"
              className={`${inputStyle} resize-none`}
              onChange={(e) => (addressRef.current = e.target.value)}
            />
          </div>

          {/* Department */}
          <div className="relative">
            <Building2 className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Department"
              className={inputStyle}
              onChange={(e) => (departmentRef.current = e.target.value)}
            />
          </div>

          {/* Designation */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Designation"
              className={inputStyle}
              onChange={(e) => (designationRef.current = e.target.value)}
            />
          </div>

          {/* Role */}
          <select
            defaultValue="employee"
            className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white outline-none focus:border-green-500"
            onChange={(e) => (roleRef.current = e.target.value)}
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

          {/* Joining Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-4 text-gray-400" />
            <input
              type="date"
              className={inputStyle}
              onChange={(e) => (joiningDateRef.current = e.target.value)}
            />
          </div>

          {/* Profile Image */}
          <div className="relative">
            <Image className="absolute left-3 top-4 text-gray-400" />
            <input
              type="file"
              accept="image/*"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 pl-10 p-3 text-white file:mr-3 file:rounded file:border-0 file:bg-green-600 file:px-3 file:py-1 file:text-white hover:file:bg-green-700"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  profileImageRef.current = e.target.files[0];
                }
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 hover:bg-green-700 disabled:bg-green-400 py-3 text-white font-semibold flex justify-center items-center transition"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 w-5 h-5" />
                Registering...
              </>
            ) : (
              "Register Employee"
            )}
          </button>

          {/* Message */}
          {message && (
            <div
              className={`p-3 rounded-lg text-center font-medium ${
                isSuccess
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;