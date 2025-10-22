import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ language }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const text = {
    EN: { login: "Login", username: "Username", password: "Password", submit: "Sign In" },
    ID: { login: "Masuk", username: "Nama Pengguna", password: "Kata Sandi", submit: "Masuk" },
  };

  const t = text[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan user ke localStorage
    localStorage.setItem("loggedInUser", JSON.stringify({ username, password }));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">{t.login}</h1>
        <input
          type="text"
          placeholder={t.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="password"
          placeholder={t.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          {t.submit}
        </button>
      </form>
    </div>
  );
};

export default Login;
