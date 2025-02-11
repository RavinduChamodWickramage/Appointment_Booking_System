import { useState } from "react";
import { signupUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signupUser(name, email, password);
      navigate("/login");
    } catch (err) {
      setError("Failed to create user");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <input
        type="text"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Email (Username)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="w-full py-2 bg-green-500 text-white rounded"
        onClick={handleSignup}
      >
        Sign Up
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupPage;
