"use client";

import React, { FunctionComponent, useEffect } from "react";
import CreateSidebar from "../pages/create/layout/CreateSidebar";
import CreateActionBar from "../pages/create/layout/CreateActionBar";
import CreatePageBar from "../pages/create/layout/CreatePageBar";
import { useRouter, usePathname } from "next/navigation";
import { observer } from "mobx-react-lite";
import createItineraryStore from "@/stores/createItinerary";
import useCreateItineraryPageInfo from "@/hooks/useCreateItineraryPageInfo";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const CreateLayout: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const current = createItineraryStore.current;
  const mergeSteps = createItineraryStore.mergeSteps;
  const { generateBaseLink, itineraryId } = useCreateItineraryPageInfo();

  useEffect(() => {
    mergeSteps.forEach((item, idx) => {
      if (pathname && pathname.includes(item.to)) {
        createItineraryStore.setCurrentStep(idx);
      }
    });
  }, [pathname]);

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
        <div className="container mx-auto pb-[100px]">{children}</div>
        <CreateActionBar />
      </div>
    </div>
  );
};

export default observer(CreateLayout);
