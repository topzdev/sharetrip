import Button from "@/components/buttons/Button";
import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import PhotosForm from "@/components/pages/create/photos/PhotosForm";
import CreatePageHeader from "@/components/pages/create/layout/CreatePageHeader";
import { mdiCloudUploadOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { CreatePhotoProvider } from "@/contexts/CreatePhotoContext";

type Props = {};

const TravelDetailsPhotos = ({}) => {
  const openPhotoUploader = () => {
    document.getElementById("photoUploader")?.click();
  };

  return (
    <CreatePhotoProvider>
      <CreatePageContainer>
        <CreatePageHeader
          title={"Photos"}
          description={
            "Upload atleast 5 photos, organize your photo, add more information and select cover photo."
          }>
          <Button
            appendIcon={<Icon path={mdiCloudUploadOutline} />}
            variant="outlined"
            color="secondary"
            label="Upload"
            rounded
            onClick={openPhotoUploader}
          />
        </CreatePageHeader>

        <PhotosForm />
      </CreatePageContainer>
    </CreatePhotoProvider>
  );
};

TravelDetailsPhotos.PageLayout = CreateLayout;

export default TravelDetailsPhotos;
