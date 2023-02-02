import Alert from "@/components/alerts/Alert";
import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";
import CategoryForm from "@/components/pages/create/category/CategoryForm";

const TravelDetailsCategoryPage = ({}) => {
  return (
    <CreatePageContainer>
      <CreatePageHeader
        title={"Categories"}
        description={
          "Select at least 1 and up to 5 travel category for this itinerary."
        }
      />

      <CategoryForm />
    </CreatePageContainer>
  );
};

TravelDetailsCategoryPage.PageLayout = CreateLayout;

export default TravelDetailsCategoryPage;
