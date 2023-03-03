import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/user").then((response) => {
      setUsers(response.data);
    });
  }, []);
  console.log(users.uuid);

  return (
    <>
      <Helmet>
        <title>Manajemen Akun</title>
      </Helmet>
      <Layout>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block w-full align-middle">
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      >
                        Mahasiswa
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user, index) => (
                      <tr key={user.uuid}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.nama_ibu}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.role}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.admin.nama}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="#"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button
                            onClick={() => dispatch(deleteUser(user.uuid))}
                            className="text-red-500 hover:text-red-700"
                            href="#"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllUser;
