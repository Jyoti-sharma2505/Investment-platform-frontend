import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    referralCode: "",
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
      const { data } = await api.post(
        "/auth/register",
        form
      );

      toast.success(data.message);

      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={submit}
        className="bg-white rounded-xl shadow-xl p-8 w-[420px]"
      >

        <h2 className="text-3xl font-bold mb-5">

          Register

        </h2>

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={changeHandler}
        />

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={changeHandler}
        />

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Mobile"
          name="mobile"
          value={form.mobile}
          onChange={changeHandler}
        />

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
        />

        <input
          className="border p-3 rounded w-full mb-5"
          placeholder="Referral Code (Optional)"
          name="referralCode"
          value={form.referralCode}
          onChange={changeHandler}
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded">

          Register

        </button>

        <p className="mt-4 text-center">

          Already have an account?

          <Link
            className="text-blue-600 ml-2"
            to="/login"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;