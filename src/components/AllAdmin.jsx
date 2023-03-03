import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { adminSelector, getAdmin, deleteAdmin } from "../features/adminSlice";

const AllAdmin = () => {
  const dispatch = useDispatch();
  const allAdmin = useSelector(adminSelector.selectAll);

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>daftar admin</title>
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
                    {allAdmin.map((admin, index) => (
                      <tr key={admin.uuid}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {admin.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {admin.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                          {admin.role}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button className="text-green-500 hover:text-green-700">
                            Edit
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <button
                            onClick={() => dispatch(deleteAdmin(admin.uuid))}
                            className="text-red-500 hover:text-red-700"
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

export default AllAdmin;
