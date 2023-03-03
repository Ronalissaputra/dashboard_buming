import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { SlNote } from "react-icons/sl";
import { FiDatabase } from "react-icons/fi";
import { FaUserCog, FaUsers } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { RiLogoutBoxRFill } from "react-icons/ri";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.auth);
  const Links = [
    { id: 1, name: "Dashboard", to: "/dashboard", icon: <RxDashboard /> },
    { id: 2, name: "Penjadwalan", to: "/", icon: <SlNote /> },
    { id: 3, name: "Tamabah User", to: "/laporan", icon: <TbReport /> },
    { id: 4, name: "Data Master", to: "/master", icon: <FiDatabase /> },
    { id: 5, name: "Manajemen Akun", to: "/users", icon: <FaUserCog /> },
  ];

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="min-h-screen w-[310px] bg-green-800">
      <div className="h-[200px] w-full bg-slate-50">
        <div className="flex h-[120px] items-center justify-center text-center">
          <img src={logo} alt="logo" className="mt-[30px] w-[160px]" />
        </div>
        <div className="text-center text-xl font-light">
          <p>Aplikasi</p>
          <p>Buming Pendamping</p>
        </div>
      </div>
      <div className="h-auto">
        <ul className="mt-10 w-full">
          <div className="mx-2 space-y-6">
            {Links.map((link) => (
              <NavLink
                to={link.to}
                key={link.id}
                className="flex-cols flex w-full items-center space-x-4 rounded-lg px-4 py-2 text-xl font-light text-slate-50 hover:bg-orange-500"
              >
                <p>{link.icon}</p>
                <p>{link.name}</p>
              </NavLink>
            ))}
            {(admin && admin.role) === "superadmin" && (
              <div>
                <div className="">
                  <NavLink
                    to="/admin"
                    className="flex-cols flex w-full items-center space-x-4 rounded-lg px-4 py-2 text-xl font-light text-slate-50 hover:bg-orange-500"
                  >
                    <p>
                      <FaUsers />
                    </p>
                    <p>Admin</p>
                  </NavLink>
                </div>
              </div>
            )}
            <div className="mt-10 flex w-full">
              <div className="w-full space-y-2">
                <div className="w-full border" />
                <button
                  onClick={logout}
                  className="flex-cols flex w-full items-center space-x-4 rounded-lg px-4 py-2 text-xl font-light text-slate-50 hover:bg-orange-500"
                >
                  <p>
                    <RiLogoutBoxRFill />
                  </p>
                  <p>Logout</p>
                </button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
