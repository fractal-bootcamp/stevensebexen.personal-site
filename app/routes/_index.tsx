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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl">Steven Sebexen</h1>
      <img width="200" src="https://static.wikia.nocookie.net/forgottenrealms/images/8/84/Monster_Manual_5e_-_Dragon%2C_Red_-_p97.jpg"></img>
      <p>Hi, I'm Steven. I make stuff.</p>
      <div>
        <h2 className="">Helpful links:</h2>
        <Link to="/about">About Me</Link>
      </div>
    </div>
  );
}
