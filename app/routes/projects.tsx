import { Link } from "@remix-run/react";

import ProjectList from "~/components/ProjectList";

import projectListDefault from "~/data/projects.json";

export default function Projects() {
  return (
    <div>
      <h1 className="text-center text-lg">Projects</h1>
      <p>Don't worry, these are all totally real. Ready to go back? Go <Link to="/">home.</Link></p>
      <ProjectList projectList={projectListDefault} />
    </div>
  );
}