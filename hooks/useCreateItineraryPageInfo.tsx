import pageRoutes from "@/configs/pageRoutes";
import { useRouter, useParams } from "next/navigation";
import { useMemo } from "react";

const useCreateItineraryPageInfo = () => {
  const params = useParams();

  const router = useRouter();
  const itineraryId = useMemo(
    () => parseInt((params && params.id) as string),
    [params && params.id]
  );

  const generateBaseLink = (to?: string) => {
    return to ? pageRoutes.create(itineraryId).to + to : undefined;
  };

  return {
    itineraryId,
    generateBaseLink,
  };
};

export default useCreateItineraryPageInfo;
