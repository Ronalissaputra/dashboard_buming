import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import NotfoundPage from "../../pages/NotfoundPage";
import AllAdmin from "../../components/AllAdmin";
import AllUser from "../../components/AllUser";
import AddUser from "../../components/AddUser";
import DataMaster from "../../components/DataMaster";
import DetailMaster from "../../components/DetailMaster";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<AllAdmin />} />
        <Route path="/users" element={<AllUser />} />
        <Route path="/master" element={<DataMaster />} />
        <Route path="/detail/:id" element={<DetailMaster />} />
        <Route path="/createadmin" element={<AddUser />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
