import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { admin } = useSelector((state) => state.auth);
  return (
    <div className="fixed top-3 w-[76%]">
      <div className="flex h-[60px] w-full items-center justify-between rounded-3xl bg-slate-300 px-5">
        <p className="text-xl font-semibold text-green-700">
          Sejak dini cegah stunting JURUSAN KEBIDANAN POLKESMAS
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-2"
        >
          <p className="cursor-pointer text-xl">{admin && admin.role}</p>
          <BiChevronDown className="cursor-pointer text-2xl" />
        </button>
        {open ? (
          <div className="absolute right-5 top-[65px] h-[300px] w-[300px] rounded-lg border bg-white">
            <p>Nama</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
