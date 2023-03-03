import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div className="flex justify-between">
      <div className="w-14 lg:w-[30%]">
        <Sidebar />
      </div>
      <div className="flex-cols mx-3 w-full">
        <Header />
        <div className="mt-2">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
