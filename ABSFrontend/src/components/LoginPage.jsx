import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("token", data.jwt);
      navigate("/appointments");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full py-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
