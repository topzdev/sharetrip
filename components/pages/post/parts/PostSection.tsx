import React from "react";

type Props = {
  id: string;
  title: React.ReactElement | string;
  children?: React.ReactElement | string;
};

const PostSection: React.FC<Props> = ({ children, title, id }) => {
  return (
    <section className="flex py-12" id={id}>
      <div className="w-[20%]">
        <h2
          className="text-4xl text-gray-800 font-semibold"
          id={id + "Heading"}>
          {title}
        </h2>
      </div>

      <div className="w-[70%] ml-auto text-lg font-serif text-gray-900/90">
        {children}
      </div>
    </section>
  );
};

export default PostSection;
