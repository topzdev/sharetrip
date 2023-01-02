import React from "react";
import AppLogo from "../AppLogo";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="min-w-[300px] w-[300px] bg-slate-50 h-screen border-r-slate-100">
      <div className="p-6">
        <AppLogo />
      </div>
    </div>
  );
};

export default Sidebar;
