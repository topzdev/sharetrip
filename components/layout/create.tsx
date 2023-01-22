import React, { FunctionComponent, useEffect } from "react";
import { Merriweather, Work_Sans } from "@next/font/google";
import CreateSidebar from "../pages/create/layout/CreateSidebar";
import CreateActionBar from "../pages/create/layout/CreateActionBar";
import CreatePageBar from "../pages/create/layout/CreatePageBar";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import createItineraryStore from "@/stores/createItinerary";
import useCreateItineraryPageInfo from "@/hooks/useCreateItineraryPageInfo";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const CreateLayout: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const current = createItineraryStore.current;
  const mergeSteps = createItineraryStore.mergeSteps;
  const { generateBaseLink, itineraryId } = useCreateItineraryPageInfo();

  useEffect(() => {
    mergeSteps.forEach((item, idx) => {
      if (router.asPath.includes(item.to)) {
        createItineraryStore.setCurrentStep(idx);
      }
    });
  }, [router.asPath]);

  useEffect(() => {
    if (current.to && itineraryId) {
      const transitionToPage = async () => {
        const link = generateBaseLink(current.to);
        if (link) await router.push(link);
      };

      transitionToPage();
    }
  }, [current.to, !Number.isNaN(itineraryId)]);

  return (
    <div className="flex justify-start min-h-screen max-h-screen">
      <Head>
        <title>
          {current.title ? `${current.title} - ${current.parent?.title}` : ""}
        </title>
      </Head>

      <aside>
        <CreateSidebar />
      </aside>

      <div className="relative w-full overflow-auto max-h-screen">
        <CreatePageBar />
        <div className="container mx-auto pb-[80px]">{children}</div>
        <CreateActionBar />
      </div>
    </div>
  );
};

export default observer(CreateLayout);
