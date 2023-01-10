import React, { FunctionComponent } from "react";
import AppNavbar from "./AppNavbar";
type Props = {
  children: React.ReactNode;
  navbarFixed?: boolean;
};

const MainLayout: FunctionComponent<Props> = ({ children, navbarFixed }) => {
  return (
    <>
      <header>
        <AppNavbar fixed={navbarFixed} />
      </header>
      {children}
    </>
  );
};

export default MainLayout;
