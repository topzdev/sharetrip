import React, { FunctionComponent } from "react";
import AppNavbar from "./AppNavbar";
import { Merriweather, Work_Sans, Open_Sans } from "@next/font/google";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["400", "500", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
  navbarFixed?: boolean;
};

const MainLayout: FunctionComponent<Props> = ({ children, navbarFixed }) => {
  return (
    <div className={`${merriweather.variable} ${workSans.variable} font-sans`}>
      <header>
        <AppNavbar fixed={navbarFixed} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
