import { Outlet } from "react-router-dom";
import MainNavigation from "../UI/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
