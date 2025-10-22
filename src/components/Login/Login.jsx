import { useState } from "react";

function Login({ language }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const text = {
    EN: { title: "Login", email: "Email", password: "Password", loginBtn: "Login" },
    ID: { title: "Masuk", email: "Email", password: "Kata Sandi", loginBtn: "Masuk" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Simulasi login tanpa pindah halaman
    if (email && password) {
      alert(`${text[language].title} successful!`);
      // Bisa tambahkan logic login di sini, misal set state isLoggedIn = true
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">{text[language].title}</h1>

        <label className="block mb-2 font-medium">{text[language].email}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <label className="block mb-2 font-medium">{text[language].password}</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          {text[language].loginBtn}
        </button>
      </form>
    </div>
  );
}

export default Login;
