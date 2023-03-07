import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const DataMaster = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  return (
    <>
      <Helmet>
        <title>Data Master</title>
      </Helmet>
      <Layout>
        <div className="grid grid-cols-2 gap-2">
          {users.map((user) => (
            <Link
              to={`/detail/${user.uuid}`}
              key={user.uuid}
              className="w-full rounded-md bg-gray-100 p-2 px-3 duration-150 ease-in-out hover:scale-105 hover:bg-gray-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-light">{user.nama_ibu}</p>
                  <p className="text-2xl font-light">{user.nama_suami}</p>
                </div>
                <div className="flex items-center space-x-5">
                  <p className="text-2xl font-light">Jumlah anak</p>
                  <p className="text-2xl font-semibold">
                    {user.tb_bayis.length}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default DataMaster;
