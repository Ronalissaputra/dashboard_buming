import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgRename } from "react-icons/cg";
import { MdMarkEmailRead } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegAddressCard, FaUserGraduate } from "react-icons/fa";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="sticky top-2 mt-2 w-full">
      <div className="flex h-[60px] w-full items-center justify-between rounded-3xl bg-gray-100 px-2">
        <p className="pl-2 text-xl font-light text-green-700">
          Sejak dini cegah stunting JURUSAN KEBIDANAN POLKESMAS
        </p>
        <button onClick={() => setOpen(!open)} className="">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border bg-orange-500 text-3xl font-semibold text-gray-100">
            {admin && admin.nama[0]}
          </div>
        </button>
        {open ? (
          <div className="absolute right-5 top-[65px] h-auto w-auto transform space-y-3 rounded-lg border bg-gray-100 py-2 px-4 transition-transform duration-1000 ease-in-out">
            <div className="flex items-center text-xl font-light">
              <CgRename className="text-2xl" />
              <p className="pl-4">{admin && admin.nama}</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <MdMarkEmailRead className="text-2xl" />
              <p className="pl-4">{admin && admin.email}</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <BsFillCalendar2DateFill className="text-2xl" />
              <p className="pl-4">{admin && admin.umur} Tahun</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <FaUserGraduate className="text-2xl" />
              <p className="pl-4">{admin && admin.prodi}</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <MdMarkEmailRead className="text-2xl" />
              <p className="pl-4">{admin && admin.semester}</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <BiPhoneCall className="text-2xl" />
              <p className="pl-4">{admin && admin.no_hp}</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <FaRegAddressCard className="text-2xl" />
              <p className="pl-4">{admin && admin.alamat}</p>
            </div>
            <div className="flex items-center text-xl font-light">
              <RiAdminFill className="text-2xl" />
              <p className="pl-4">{admin && admin.role}</p>
            </div>
            <div className="border"></div>
            <div
              onClick={logout}
              className="flex h-10 cursor-pointer items-center rounded-md hover:bg-gray-300"
            >
              <div className="flex items-center text-xl font-light">
                <RiLogoutBoxRFill className="text-2xl" />
                <p className="pl-4">logout</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
