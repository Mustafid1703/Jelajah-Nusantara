import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ language }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const text = {
    EN: { profileTitle: "Your Profile", welcome: "Hello", logout: "Logout", backHome: "Back to Home" },
    ID: { profileTitle: "Profil Anda", welcome: "Halo", logout: "Keluar", backHome: "Kembali ke Beranda" },
  };

  const t = text[language];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">{t.profileTitle}</h1>
        <p className="text-gray-700 text-lg mb-6">
          {t.welcome}, <span className="font-semibold">{user.username}</span>!
        </p>

        <div className="text-left mb-6">
          <p className="mb-2"><span className="font-semibold">Username:</span> {user.username}</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> {user.username}@example.com</p>
          <p className="mb-2"><span className="font-semibold">Password:</span> {user.password}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            {t.logout}
          </button>
          <button
            onClick={() => navigate("/")}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            {t.backHome}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
