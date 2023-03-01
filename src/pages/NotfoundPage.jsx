import React from "react";
import { Helmet } from "react-helmet";

const NotfoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="flex min-h-screen w-full items-center justify-center">
        <p className="text-5xl font-thin">404 Not Found</p>
      </div>
    </>
  );
};

export default NotfoundPage;
