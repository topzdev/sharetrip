import React, { FunctionComponent } from "react";
import { Merriweather, Work_Sans } from "@next/font/google";
import CreateSidebar from "./create/CreateSidebar";
import CreateActionBar from "./create/CreateActionBar";
import CreatePageBar from "./create/CreatePageBar";

type Props = {
  children: React.ReactNode;
};

const CreateLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="flex justify-start min-h-screen max-h-screen">
      <aside>
        <CreateSidebar />
      </aside>

      <div className="relative w-full overflow-auto max-h-screen">
        <CreatePageBar />
        <div className="container mx-auto">{children}</div>
        <CreateActionBar />
      </div>
    </div>
  );
};

export default CreateLayout;
