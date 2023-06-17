import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import ItineraryList from "@/components/pages/create/itinerary/ItineraryList";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";

type Props = {};

const TravelDetailsItinerary = ({}) => {
  return (
    <CreatePageContainer>
      <CreatePageHeader
        title={"Itinerary"}
        description={"Share your day to day experience here!"}
      ></CreatePageHeader>

      <ItineraryList />
    </CreatePageContainer>
  );
};

TravelDetailsItinerary.PageLayout = CreateLayout;

export default TravelDetailsItinerary;
