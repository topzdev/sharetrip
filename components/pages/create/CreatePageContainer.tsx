"use client";
import React from "react";

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const CreatePageContainer: React.FC<Props> = ({ children }) => {
  return <div className="w-[700px] mx-auto">{children}</div>;
};

export default CreatePageContainer;
