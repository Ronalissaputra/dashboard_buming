import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Wellcome from "../components/Wellcome";
import { FaUserFriends } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

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
        <title>Dashboard - admin</title>
      </Helmet>
      <Layout>
        <Wellcome />
        <div className="flex space-x-5">
          <div className="mt-4 h-[160px] w-[20%] rounded-2xl bg-gray-100">
            <div className="h-20 pt-2 text-center">
              <div className="flex items-center justify-center">
                <FaUserFriends className="rounded-full bg-green-500 p-2 text-[70px]" />
              </div>
              <p className="text-2xl font-light">ibu hamil</p>
              <p className="text-3xl font-light">20</p>
            </div>
          </div>
          <div className="mt-4 h-[160px] w-[25%] rounded-2xl bg-gray-100">
            <div className="h-20 pt-2 text-center">
              <div className="flex items-center justify-center">
                <MdSchool className="rounded-full bg-green-500 p-2 text-[70px]" />
              </div>
              <p className="text-xl font-light">Mahasiswa Pendamping</p>
              <p className="text-3xl font-light">20</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
