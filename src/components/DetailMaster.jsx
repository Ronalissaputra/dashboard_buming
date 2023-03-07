import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout";

const DetailMaster = () => {
  const { id } = useParams();
  const [bumil, setBumil] = useState([]);
  const [bayis, setBayis] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`).then((response) => {
      setBumil(response.data);
      setBayis(response.data.tb_bayis);
    });
  }, []);
  console.log(bayis);

  //   console.log(bumil);

  return (
    <Layout>
      <div className="w-full">
        <div className="flex h-10 w-full items-center justify-center rounded-lg bg-green-500">
          <p className="text-2xl font-light text-gray-100">
            Data {bumil.nama_ibu}
          </p>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block w-full align-middle">
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Nama
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        {bumil.nama_ibu}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        nik
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        {bumil.nik}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        umur
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.umur}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        lama_nikah
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.lama_nikah} tahun
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        suku
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.suku}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        agama
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.agama}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        pendidikan
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pendidikan}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        pekerjaan
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pekerjaan}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        alamat
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.alamat}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        no_hp
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.no_hp}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        gol_darah
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.gol_darah}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        no_bpjs
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.no_bpjs}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        tempat_periksa
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.tempat_periksa}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        email
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* data suami */}
        <div className="mt-5 flex h-10 w-full items-center justify-center rounded-lg bg-green-500">
          <p className="text-2xl font-light text-gray-100">
            Data Suami {bumil.nama_ibu}
          </p>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block w-full align-middle">
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        nama_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.nama_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        umur_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.umur_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        agama_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.agama_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        suku_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.suku_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        pendidikan_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pendidikan_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        pekerjaan_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pekerjaan_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        alamat_suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.alamat_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        no_hpsuami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.no_hpsuami}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* table anak */}
        <div className="mt-5 flex h-10 w-full items-center justify-center rounded-lg bg-green-500">
          <p className="text-2xl font-light text-gray-100">
            Data bayi {bumil.nama_ibu}
          </p>
        </div>
        <div className="mt-2 flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block w-full align-middle">
              <div className="overflow-hidden rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  {bayis.map((bayi) => (
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          nama_bayi
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.nama_bayi}
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          jenis_klamin
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.jenis_klamin}
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          tnggl_lahir
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.anak_ke}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMaster;
