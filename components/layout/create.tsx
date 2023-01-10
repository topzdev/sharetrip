import React, { FunctionComponent } from "react";
import { Merriweather, Work_Sans } from "@next/font/google";
import CreateSidebar from "./create/CreateSidebar";

type Props = {
  children: React.ReactNode;
};

const CreateLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <aside>
        <CreateSidebar />
      </aside>
      {children}
    </div>
  );
};

export default CreateLayout;
