import pageRoutes from "@/configs/pageRoutes";
import { useRouter } from "next/router";
import { useMemo } from "react";

const useCreateItineraryPageInfo = () => {
  const router = useRouter();
  const itineraryId = useMemo(
    () => parseInt(router.query.id as string),
    [router.query.id]
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
