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
    <div className="sticky top-0 min-h-screen bg-green-800">
      <div className="h-[50px] w-full bg-slate-50 lg:h-[200px]">
        <div className="flex items-center justify-center text-center lg:h-[120px]">
          <img src={logo} alt="logo" className="w-[160px] lg:mt-[30px]" />
        </div>
        <div className="invisible text-center text-xl font-light lg:visible">
          <p>Aplikasi</p>
          <p>Buming Pendamping</p>
        </div>
      </div>
      <div className="h-auto">
        <ul className="w-full lg:mt-10">
          <div className="flex-1 items-center justify-center space-y-6 lg:mx-2">
            {Links.map((link) => (
              <NavLink
                to={link.to}
                key={link.id}
                className="flex-cols flex w-full items-center rounded-lg px-4 py-2 text-xl font-light text-slate-50 hover:bg-orange-500 lg:space-x-4"
              >
                <p>{link.icon}</p>
                <p className="invisible lg:visible">{link.name}</p>
              </NavLink>
            ))}
            {(admin && admin.role) === "superadmin" && (
              <div>
                <div className="">
                  <NavLink
                    to="/admin"
                    className="flex-cols flex w-full items-center rounded-lg px-4 py-2 text-xl font-light text-slate-50 hover:bg-orange-500 lg:space-x-4"
                  >
                    <p>
                      <FaUsers />
                    </p>
                    <p className="invisible lg:visible">Admin</p>
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
                  <p className="invisible lg:visible">Logout</p>
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
