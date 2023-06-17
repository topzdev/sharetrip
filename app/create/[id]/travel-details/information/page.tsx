import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import InformationForm from "@/components/pages/create/information/InformationForm";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";

type Props = {};

const TravelDetailInformation = ({}) => {
  return (
    <CreatePageContainer>
      <CreatePageHeader
        title={"Information"}
        description={
          "Please give your trip some main information so other users get a first impression about your personal trip."
        }
      />

      <InformationForm />
    </CreatePageContainer>
  );
};

export default TravelDetailInformation;
