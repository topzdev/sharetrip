import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";
import TipsReminderList from "@/components/pages/create/tips-and-reminder/TipsReminderList";

type Props = {};

const AddtionalItinerary = ({}) => {
  return (
    <CreatePageContainer>
      <CreatePageHeader
        title={"Tips and Reminder"}
        description={
          "List all your reminder and tips this itinerary, this will be the main tips and reminder for the whole itinerary and will be merged with tips on stations "
        }
      ></CreatePageHeader>
      <TipsReminderList />
    </CreatePageContainer>
  );
};

export default AddtionalItinerary;
