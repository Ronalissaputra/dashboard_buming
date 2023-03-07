import React, { useEffect, useState } from "react";
import { getMe } from "../features/authSlice";
import { adminSelector } from "../features/adminSlice.js";
import axios from "axios";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";
import { FaUserFriends } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin, isError } = useSelector((state) => state.auth);
  const allAdmin = useSelector(adminSelector.selectAll);

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((response) => {
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <div className="space-y-2">
          <Wellcome />
          <div className="flex w-full gap-2">
            <div className="flex h-[120px] w-full items-center justify-between rounded-2xl bg-gray-100 px-5 duration-150 ease-in-out hover:scale-105 hover:bg-gray-300">
              <p className="text-3xl font-light">{users.length}</p>
              <div className="flex items-center space-x-10">
                <p className="text-3xl font-light">Jumlah Ibu Hamil</p>
                <FaUserFriends className="text-[100px] text-gray-400" />
              </div>
            </div>
            {(admin && admin.role) === "superadmin" && (
              <div className="flex h-[120px] w-full items-center justify-between rounded-2xl bg-gray-100 px-5 duration-150 ease-in-out hover:scale-105 hover:bg-gray-300">
                <p className="text-3xl font-light">{allAdmin.length - 1}</p>
                <div className="flex items-center space-x-10">
                  <p className="text-3xl font-light">Mahasiswa Pendamping</p>
                  <MdSchool className="text-[100px] text-gray-400" />
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
