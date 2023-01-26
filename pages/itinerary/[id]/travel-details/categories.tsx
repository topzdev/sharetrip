import Alert from "@/components/alerts/Alert";
import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";
import CategoryList from "@/components/pages/create/list/CategoryList";

const TravelDetailsCategoryPage = ({}) => {
  return (
    <CreatePageContainer>
      <CreatePageHeader
        title={"Categories"}
        description={
          "Select at least 1 and up to 5 travel category for this itinerary."
        }
      />

      <Alert label={"Hello, World!"} show={true} />

      <CategoryList />
    </CreatePageContainer>
  );
};

TravelDetailsCategoryPage.PageLayout = CreateLayout;

export default TravelDetailsCategoryPage;
