import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="mx-auto w-1/4 my-4 bg-slate-400/50">
        <h1 className="text-lg text-center">Steven Sebexen</h1>
      </div>
      <img className="mx-auto w-24" src="/img/bg-default.webp"></img>
      <div className="mx-auto w-2/3 bg-slate-400/50">
        <p className="text-center">Hi, I'm Steven. I make stuff.</p>
        <p>Helpful links:</p>
        <p><Link to="/about">About Me</Link></p>
      </div>
    </div>
  );
}
