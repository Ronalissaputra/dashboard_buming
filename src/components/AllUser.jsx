import React, { useEffect } from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, getUser } from "../features/userSlice";

const AllUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelector.selectAll);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>users</title>
      </Helmet>
      <Layout>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block w-full p-1.5 align-middle">
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      >
                        ID
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
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.nama}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.role}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {user.admin.name}
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
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                          >
                            Delete
                          </a>
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
