import React, { useEffect } from "react";
import AdministrationHome from "../components/AdministratorHome";

const AdministrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AdministrationHome />
    </>
  );
};

export default AdministrationPage;
