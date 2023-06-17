import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import CategoryForm from "@/components/pages/create/category/CategoryForm";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";

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

export default TravelDetailsCategoryPage;
