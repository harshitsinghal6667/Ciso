
import { useState } from "react";
import { auth, provider } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      resetFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password.");
      } else {
        alert(error.message);
      }
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      resetFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use. Please log in.");
      } else {
        alert(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      resetFields();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('src/assets/background.jpg')" }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">
          CISO Dashboard Login Page
        </h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black p-2 rounded bg-gray-400 w-full mb-3"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black p-2 rounded bg-gray-400 w-full mb-4"
          placeholder="Password"
        />
        <button
          onClick={handleEmailLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-600 transition"
        >
          Login with Email
        </button>
        <button
          onClick={handleSignUp}
          className="bg-green-500 text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-600 transition"
        >
          Sign Up (New User)
        </button>
        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
