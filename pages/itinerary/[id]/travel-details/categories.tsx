import CreateLayout from "@/components/layout/create";
import CategoryList from "@/components/pages/create/components/CategoryList";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import ReactLog from "@/components/utility/ReactLog";

const TravelDetailsCategoryPage = ({}) => {
  return (
    <CreatePageContainer>
      <h2 className="text-2xl font-bold">Categories</h2>
      <p className="text-slate-500 mt-1">
        Select at least 1 and up to 5 travel category for this itinerary.
      </p>

      <CategoryList />
    </CreatePageContainer>
  );
};

TravelDetailsCategoryPage.PageLayout = CreateLayout;

export default TravelDetailsCategoryPage;
