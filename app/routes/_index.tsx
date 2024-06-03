import { Link } from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-5xl text-center">Steven Sebexen</h1>
      <img className="mx-auto w-32" src="/img/bg-default.webp"></img>
      <div className="mx-auto my-4 w-2/3 bg-slate-200">
        <p className="text-center">Hi, I'm Steven. I make stuff. This is my placeholder dragon. Do you like him?</p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 h-96">
        <Link className="mx-8 my-4 hover:m-0" to="/about">
          <div className="flex items-center w-full h-full bg-red-500">
            <p className="m-auto text-white text-3xl">About</p>
          </div>
        </Link>
        <Link className="mx-8 my-4 hover:m-0" to="/projects">
          <div className="flex items-center w-full h-full bg-cyan-600">
            <p className="m-auto text-white text-3xl">Projects</p>
          </div>
        </Link>
        <a className="mx-8 my-4 hover:m-0" href="http://github.com/ssebexen">
          <div className="flex items-center w-full h-full bg-violet-600">
            <p className="m-auto text-white text-3xl">GitHub</p>
          </div>
        </a>
        <div className="mx-8 my-4 hover:m-0">
          <div className="flex items-center w-full h-full bg-lime-600">
            <p className="m-auto text-white text-3xl">Contact</p>
          </div>
        </div>
      </div>
      <p className="text-center">Copyright never. Rights are too expensive to reserve.</p>
    </div>
  );
}
