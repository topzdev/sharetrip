import Button from "@/components/buttons/Button";
import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";
import { mdiCloudUploadOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { ReactElement } from "react";
import ItineraryList from "../itinerary/ItineraryList";

type Props = {};

const TravelDetailsItinerary = ({}) => {
  return (
    <CreatePageContainer>
      <CreatePageHeader
        title={"Itinerary"}
        description={
          "Share your day to day experience here!"
        }></CreatePageHeader>

      <ItineraryList />
    </CreatePageContainer>
  );
};

TravelDetailsItinerary.PageLayout = CreateLayout;

export default TravelDetailsItinerary;
