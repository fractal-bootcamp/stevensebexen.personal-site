import { Link } from "@remix-run/react";
import { useState } from "react";

import AboutTab from "~/components/AboutTab";

const contentWindowGameDev = <div>
  <p>I've been making games since I was 7 years old.</p>
</div>;

const contentWindowArt = <div>
  <p>I was actually president of my high school Art Club. They had low standards apparently.</p>
</div>;

const contentWindowMusic = <div>
  <p>I am a "classically-trained" musician who makes very un-classical music using a rather classical workflow.</p>
</div>;

const contentWindowMeIrl = <div>
  <p>I am a person.<br/>...that's just one of the many lies you can tell yourself.</p>
</div>

const contentWindows: {[key: string]: any} = {
  game_dev: contentWindowGameDev,
  art: contentWindowArt,
  music: contentWindowMusic,
  me_irl: contentWindowMeIrl
};

export default function About() {

  const [currentTab, setCurrentTab] = useState('game_dev');

  function clickHandler(tabId: string) {
    setCurrentTab(tabId);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-screen">
        <Link className="flex-1 py-2 text-center bg-slate-300 hover:bg-slate-500" to="/">
          <p>Home</p>
        </Link>
        <AboutTab tabId='game_dev' label='Game Dev' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId='art' label='Art' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId='music' label='Music' currentTab={currentTab} onClick={clickHandler} />
        <AboutTab tabId='me_irl' label='Me IRL' currentTab={currentTab} onClick={clickHandler} />
      </div>
      {contentWindows[currentTab]}
    </div>
  );
}