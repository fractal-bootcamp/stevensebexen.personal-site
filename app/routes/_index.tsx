import { Link } from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const [ contactMouseover, setContactMouseover ] = useState(false);
  return (
    <div className="flex flex-col w-screen h-screen m-auto py-4 bg-gradient-to-t from-[#121212] to-[#272727] text-white items-center">
      <h1 className="text-5xl text-center">Steven Sebexen</h1>
      <img className="mx-auto w-32" src="/img/bg-default.webp" alt="A red dragon."></img>
      <div className="mx-auto my-4 px-4 w-full md:w-2/3">
        <p className="text-center">Hi, I'm Steven. I make stuff. This is my placeholder dragon. Do you like him?</p>
      </div>
      <div className="grid flex-1 grid-cols-2 grid-rows-2 max-w-[1024px] w-full">
        <Link className="mx-4 md:mx-16 my-2 md:my-8 hover:m-2 transition-all duration-200" to="/about">
          <div className="flex items-center w-full h-full bg-[#F498A1] transition-all hover:rounded-3xl drop-shadow-md">
            <p className="m-auto text-white text-3xl">About</p>
          </div>
        </Link>
        <Link className="mx-4 md:mx-16 my-2 md:my-8 hover:m-2 transition-all duration-200" to="/projects">
          <div className="flex items-center w-full h-full bg-orange-500 transition-all hover:rounded-3xl drop-shadow-md">
            <p className="m-auto text-white text-3xl">Projects</p>
          </div>
        </Link>
        <a className="mx-4 md:mx-16 my-2 md:my-8 hover:m-2 transition-all duration-200" href="http://github.com/ssebexen">
          <div className="flex items-center w-full h-full bg-violet-600 transition-all hover:rounded-3xl drop-shadow-md">
            <p className="m-auto text-white text-3xl">GitHub</p>
          </div>
        </a>
        <div className="mx-4 md:mx-16 my-2 md:my-8 hover:m-2 transition-all duration-200" onMouseOver={() => setContactMouseover(true)} onMouseOut={() => setContactMouseover(false)}>
          <div className="flex items-center w-full h-full bg-lime-600 transition-all hover:rounded-3xl drop-shadow-md">
            <p className="m-auto text-white text-3xl">{contactMouseover ? 'No' : 'Contact'}</p>
          </div>
        </div>
      </div>
      <p className="text-center">Copyright never. Rights are too expensive to reserve.</p>
    </div>
  );
}
