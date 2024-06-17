import { Link } from "@remix-run/react";

import ProjectList from "~/components/old/ProjectList";

import projectListDefault from "~/data/projects_old.json";

export default function Projects() {
  return (
    <div className='flex flex-col h-screen justify-start'>
      <h1 className="flex-0 text-center text-3xl">Projects</h1>
      <p className='flex-0 p-2'>Don't worry, these are all totally real. Ready to go back? Go <Link className="text-violet-700" to="/">home.</Link></p>
      <ProjectList projectList={projectListDefault} />
    </div>
  );
}