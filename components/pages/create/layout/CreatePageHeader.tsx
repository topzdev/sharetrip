"use client";
import React from "react";

type Props = {
  title: string | React.ReactElement;
  description?: string | React.ReactElement;
  children?: string | React.ReactElement | React.ReactElement[];
};

const CreatePageHeader: React.FC<Props> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="flex mb-10 items-start">
      <div className="mr-2 items-start">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-slate-500 mt-1">{description}</p>}
      </div>

      {children}
    </div>
  );
};

export default CreatePageHeader;
