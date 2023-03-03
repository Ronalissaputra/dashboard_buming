import React from "react";
import adminlogo from "../assets/admin.png";
import { useSelector } from "react-redux";

const Wellcome = () => {
  const { admin } = useSelector((state) => state.auth);

  return (
    <div className="flex h-[120px] w-full items-center justify-between rounded-2xl bg-gray-100">
      <div className="px-5 text-3xl font-light">
        <p>
          Hi, <span className="text-green-500">{admin && admin.nama}</span>
        </p>
        <p>
          Selamat datang kembali, Status anda{" "}
          <span className="font-semibold">{admin && admin.role}</span>
        </p>
      </div>
      <div>
        <img src={adminlogo} alt="logo admin" className="w-32" />
      </div>
    </div>
  );
};

export default Wellcome;
