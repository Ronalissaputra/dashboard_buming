import React, { useState } from "react";
import Layout from "./Layout";
import { RxArrowBottomRight } from "react-icons/rx";

const DataMaster = () => {
  const [detail, setDetail] = useState(false);
  console.log(detail);
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`${
            detail ? "h-auto" : "h-20"
          } translate w-full transform rounded-md bg-green-600 p-2 duration-1000 ease-in-out`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl text-gray-200">Nama Ibu Hamil - icha</p>
            </div>
            <div
              onClick={() => setDetail(!detail)}
              className="flex cursor-pointer items-center rounded-md px-4 text-2xl text-gray-200 hover:bg-gray-600"
            >
              <button>Detail</button>
              <RxArrowBottomRight className="font-bold" />
            </div>
          </div>
          <div className={`${detail ? "visible" : "invisible"}`}>
            <p className="text-2xl text-gray-200">Nama Ibu Hamil - icha</p>
            <p className="text-2xl text-gray-200">Nama Suami - oyen</p>
            <p className="text-2xl text-gray-200">Nama Ibu Hamil - icha</p>
            <p className="text-2xl text-gray-200">Nama Suami - oyen</p>
          </div>
        </div>
        <div className="h-20 w-full rounded-md bg-green-600"></div>
        <div className="h-20 w-full rounded-md bg-green-600"></div>
      </div>
    </Layout>
  );
};

export default DataMaster;
