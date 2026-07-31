import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", form);

      login(data.token, data.user);

      toast.success(data.message);

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={submit}
        className="bg-white shadow-xl rounded-xl p-8 w-96"
      >

        <h2 className="text-3xl font-bold mb-6">

          Login

        </h2>

        <input
          className="border p-3 rounded w-full mb-4"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />

        <input
          className="border p-3 rounded w-full mb-5"
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded">

          Login

        </button>

        <p className="mt-4 text-center">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;