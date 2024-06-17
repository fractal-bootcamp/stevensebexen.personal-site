import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";

import AboutTab from "~/components/AboutTab";
import ArtGallery from "~/components/ArtGallery";
import contentWindows from "~/data/contentWindows";

import { readdirSync } from 'node:fs' // TODO: Fix error thrown
import { LoaderFunctionArgs } from "@remix-run/node";

export default function About() {

  const [currentTab, setCurrentTab] = useState<number>(0);
  const loaderData: { imageUrls: string[] } | undefined = useLoaderData();

  function clickHandler(tabId: number) {
    setCurrentTab(tabId);
  }

  console.log(loaderData);

  return (
    <div className="flex flex-col h-screen bg-[#F9C4C0] bg-gradient-to-t from-[#F498A1] to-[#F9C4C0]">
      <div className="flex flex-row p-4 gap-4 w-screen">
        <Link className="flex-1 py-2 text-center bg-[#00000000] hover:bg-[#D82D6E] transition-colors" to="/">
          <p>Home</p>
        </Link>
        <AboutTab tabId={0} label='Game Dev' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId={1} label='Art' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId={2} label='Music' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId={3} label='Me IRL' currentTab={currentTab} onClick={clickHandler} />
      </div>
      <div className="flex flex-1 overflow-y-auto">
        <div className="flex-1 m-[5%] p-3 overflow-y-auto rounded-xl drop-shadow-md bg-[#ffffff88]">
          {contentWindows[currentTab]}
          {currentTab === 1 && <ArtGallery imageUrls={loaderData?.imageUrls} />}
        </div>
      </div>
    </div>
  );
}

export function loader({ request }:LoaderFunctionArgs) {
  return {
    imageUrls: readdirSync('./public/img/art-gallery').map(url => '/img/art-gallery/' + url)
  };
}