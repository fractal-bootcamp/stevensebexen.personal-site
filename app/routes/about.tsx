import { Link } from "@remix-run/react";
import { useState } from "react";

import AboutTab from "~/components/AboutTab";
import contentWindows from "~/data/contentWindows.json";

export default function About() {

  const [currentTab, setCurrentTab] = useState<number>(0);

  function clickHandler(tabId: number) {
    setCurrentTab(tabId);
  }

  return (
    <div className="flex flex-col h-screen bg-[#F9C4C0]">
      <div className="flex flex-row w-screen">
        <Link className="flex-1 py-2 text-center bg-[#F9C4C0] hover:bg-[#D82D6E] transition-colors" to="/">
          <p>Home</p>
        </Link>
        <AboutTab tabId={0} label='Game Dev' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId={1} label='Art' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId={2} label='Music' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId={3} label='Me IRL' currentTab={currentTab} onClick={clickHandler} />
      </div>
      <div className="flex flex-1 bg-gradient-to-t from-[#F498A1] to-[#F9C4C0]">
        <div className="flex-1 m-[5%] p-3 rounded-xl drop-shadow-md bg-white">
          {contentWindows[currentTab]}
        </div>
      </div>
    </div>
  );
}