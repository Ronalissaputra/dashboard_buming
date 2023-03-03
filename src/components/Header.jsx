import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { admin } = useSelector((state) => state.auth);
  return (
    <div className="sticky top-2 mt-2 w-full">
      <div className="flex h-[60px] w-full items-center justify-between rounded-3xl bg-gray-100 px-2">
        <p className="pl-2 text-xl font-light text-green-700">
          Sejak dini cegah stunting JURUSAN KEBIDANAN POLKESMAS
        </p>
        <button onClick={() => setOpen(!open)} className="">
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-orange-500 text-3xl font-semibold text-gray-100">
            {admin && admin.name[0]}
          </div>
        </button>
        {open ? (
          <div className="duration-2000 absolute right-5 top-[65px] h-auto w-[300px] transform space-y-3 rounded-lg border bg-gray-100 p-2 transition-transform ease-in-out">
            <p className="text-xl font-light">{admin && admin.name}</p>
            <p className="text-xl font-light">{admin && admin.email}</p>
            <p className="text-xl font-light">{admin && admin.role}</p>
            <p className="text-xl font-light">{admin && admin.uuid}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
