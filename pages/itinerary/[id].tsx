import CreateLayout from "@/components/layout/create";
import React, { ReactElement } from "react";

type Props = {};

const ItineraryBySlug = ({}) => {
  return <div>Hello World</div>;
};

ItineraryBySlug.getLayout = function getLayout(page: ReactElement) {
  return <CreateLayout>{page}</CreateLayout>;
};

export default ItineraryBySlug;
