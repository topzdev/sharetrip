import React from "react";

type Props = {
  children?: React.ReactElement[];
};

const CreatePageContainer: React.FC<Props> = ({ children }) => {
  return <div className="w-[800px] mx-auto">{children}</div>;
};

export default CreatePageContainer;