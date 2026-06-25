import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

function LoginForm() {
  const navigate = useNavigate();

  const user = useStore((state) => state.user);
  const login = useStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === user.email &&
      mobile === user.mobile
    ) {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid Email or Mobile Number");
    }
  };

  return (
    <div className="w-full max-w-md">

      <h1 className="text-5xl font-bold text-green-400 mb-3">
        Super App
      </h1>

      <p className="text-white text-xl mb-8">
        Login
      </p>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full p-4 rounded-lg bg-gray-800 text-white outline-none"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          className="w-full bg-green-400 hover:bg-green-500 py-4 rounded-lg text-black font-bold transition"
        >
          LOGIN
        </button>

      </form>

      <p className="text-gray-400 mt-6">
        Don't have an account?{" "}
        <Link
          to="/"
          className="text-green-400"
        >
          Register
        </Link>
      </p>

    </div>
  );
}

export default LoginForm;