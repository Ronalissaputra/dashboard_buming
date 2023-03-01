import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAdmin, reset } from "../features/authSlice";

const FormLogin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginAdmin({ email, password }));
  };

  return (
    <form onSubmit={Auth}>
      <div className="mx-6">
        <div className="mt-4">
          <label className="text-xl text-slate-500">Username</label>
          <div className="flex">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              className="mt-2 w-full rounded-none rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 p-2 text-lg text-slate-500"
              placeholder="Enter Your Username"
            />
            <span className="mt-2 inline-flex w-[60px] items-center justify-center rounded-r-lg border border-l-0 border-slate-400 bg-green-500 px-3 text-sm text-gray-900">
              <FaUser className="text-xl text-slate-50" />
            </span>
          </div>
        </div>
        <div className="mt-2">
          <label className="text-xl text-slate-500">Password</label>
          <div className="flex">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              type={show ? "text" : "password"}
              id="website-admin"
              className="mt-2 w-full rounded-none rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 p-2 text-lg text-slate-500"
              placeholder="Enter Your Password"
            />
            <span className="mt-2 inline-flex w-[60px] items-center justify-center rounded-r-lg border border-l-0 border-slate-400 bg-green-500 px-3 text-sm text-gray-900">
              <RiLockPasswordFill className="text-2xl text-slate-50" />
            </span>
          </div>
        </div>
        <div className="my-4 flex items-center space-x-2">
          <input
            onClick={() => setShow(!show)}
            type="checkbox"
            className="h-5 w-5 cursor-pointer border-none"
          />
          <p className="text-lg font-semibold text-slate-500">Show Password</p>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-2 text-xl font-semibold text-slate-100 hover:bg-green-700"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
