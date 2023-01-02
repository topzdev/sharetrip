import React, { FunctionComponent } from "react";
import { Merriweather, Work_Sans } from "@next/font/google";
import CreateSidebar from "./create/Sidebar";

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

const CreateLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      className={`flex ${merriweather.variable} ${workSans.variable} font-sans`}>
      <aside>
        <CreateSidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default CreateLayout;
