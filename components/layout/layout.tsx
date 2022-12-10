import React, { FunctionComponent } from "react";
import AppNavbar from "./AppNavbar";
import { Merriweather, Work_Sans } from "@next/font/google";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["400", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={`${merriweather.variable} ${workSans.variable} font-sans`}>
      <header>
        <AppNavbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
