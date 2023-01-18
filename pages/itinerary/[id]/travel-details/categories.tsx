import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import React, { ReactElement } from "react";

type Props = {};

const TravelDetailsCategoryPage = ({}) => {
  return (
    <CreatePageContainer>
      <h2 className="text-2xl font-bold">Categories</h2>
      <p className="text-slate-500 mt-1">
        Select at least 1 and up to 5 travel category for this itinerary.
      </p>
    </CreatePageContainer>
  );
};

TravelDetailsCategoryPage.PageLayout = CreateLayout;

export default TravelDetailsCategoryPage;
