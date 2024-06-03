import { Link } from "@remix-run/react";

export default function About() {
  return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1 className="text-3xl">About Me</h1>
            <p>I am extraordinarily bad at writing about me pages. Isn't that a fun fact?</p>
            <p>Wanna see my <a href="https://github.com/ssebexen">GitHub</a>?</p>
            <p>Probably not. I recommend going <Link to="/">home</Link>.</p>
        </div>
    );
}