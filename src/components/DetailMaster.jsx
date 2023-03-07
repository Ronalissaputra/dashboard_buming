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
  }, [id]);

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
                        Nik
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                        {bumil.nik}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Umur
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.umur} Tahun
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Lama Nikah
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.lama_nikah} tahun
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Suku
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.suku}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Agama
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.agama}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Pendidikan
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pendidikan}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Pekerjaan
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pekerjaan}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Alamat
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.alamat}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Nomor handphone
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.no_hp}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Golongan Darah
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.gol_darah}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Nomor bpjs
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.no_bpjs}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Tempat Periksa
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.tempat_periksa}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Email
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
                        Nama Suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.nama_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Umur Suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.umur_suami} Tahun
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Agama Suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.agama_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Suku Suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.suku_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Pendidikan suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pendidikan_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Pekerjaan Suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.pekerjaan_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        Alamat Suami
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        {bumil.alamat_suami}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                        No Handphone Suami
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
                          Nama Bayi
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.nama_bayi}
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          Anak Ke
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.anak_ke}
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          Jenis Kelamin
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.jenis_klamin}
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          Tanggal Lahir
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                          {bayi.tnggl_lahir}
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
