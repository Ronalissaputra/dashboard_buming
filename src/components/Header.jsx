import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
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
          <div className="absolute right-5 top-[65px] h-auto w-auto transform rounded-lg border bg-gray-100  transition-transform duration-1000 ease-in-out">
            <div className="flex flex-col items-center justify-center rounded-t-lg bg-green-700 pt-6">
              <div className="absolute top-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 bg-orange-500 text-3xl font-semibold text-gray-100">
                {admin && admin.nama[0]}
              </div>
              <div>
                <div className="mt-10 w-[350px] bg-gray-100 pt-2">
                  <div className="mt-5 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xl font-light">
                        {admin && admin.nama}
                      </p>
                      <p className="text-xl font-light">
                        {admin && admin.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 w-full space-y-2 px-2">
                    <div className="flex h-10 cursor-pointer items-center rounded-md hover:bg-gray-300">
                      <HiOutlineUserCircle className="text-3xl" />
                      <p className="pl-4 text-xl font-light">Ubah Profil</p>
                    </div>
                    <div className="flex h-10 cursor-pointer items-center rounded-md hover:bg-gray-300">
                      <RiLockPasswordLine className="text-3xl" />
                      <p className="pl-4 text-xl font-light">Ganti Password</p>
                    </div>
                    <div
                      onClick={logout}
                      className="flex h-10 cursor-pointer items-center rounded-md hover:bg-gray-300"
                    >
                      <AiOutlineLogout className="text-3xl" />
                      <p className="pl-4 text-xl font-light">Log Out</p>
                    </div>
                  </div>
                </div>
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
