import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div className="flex justify-between">
      <div className="sticky top-0 w-20 lg:w-[22%]">
        <Sidebar />
      </div>
      <div className="flex-cols mx-5 w-[78%]">
        <Header />
        <div className="mt-20">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
