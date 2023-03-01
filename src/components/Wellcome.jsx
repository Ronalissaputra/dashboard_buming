import React from "react";
import adminlogo from "../assets/admin.png";
import { useSelector } from "react-redux";

const Wellcome = () => {
  const { admin } = useSelector((state) => state.auth);

  return (
    <div className="mt-5 flex h-[120px] w-[50%] items-center justify-between rounded-2xl bg-slate-300">
      <div className="px-5 text-3xl font-semibold">
        <p>
          Hi, <span className="text-green-500">{admin && admin.name}</span>
        </p>
        <p>Welcome Back !</p>
      </div>
      <div>
        <img src={adminlogo} alt="logo admin" className="w-32" />
      </div>
    </div>
  );
};

export default Wellcome;
