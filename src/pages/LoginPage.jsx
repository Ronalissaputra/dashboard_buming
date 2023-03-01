import logo from "../assets/logo.png";
import FormLogin from "../components/FormLogin";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { isError, message } = useSelector((state) => state.auth);
  return (
    <>
      <Helmet>
        <title>Loginpage</title>
      </Helmet>
      {isError && <p>{message}</p>}
      <div className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="h-[500px] w-[450px] rounded-lg border shadow-lg">
          <div className="text-center">
            <div className="flex h-[160px] w-full items-center justify-center">
              <img src={logo} className="w-[230px] pt-4" alt="logo" />
            </div>
            <p className="text-lg text-slate-500">Login Into Your Account</p>
          </div>
          <FormLogin />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
