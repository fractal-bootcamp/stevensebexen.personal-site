import { useState } from "react";

import Project from "~/interfaces/Project";
import ProjectListTile from "~/components/ProjectListTile";
import ProjectListTileInactive from "~/components/ProjectListTileInactive";

interface ProjectList {
  projects: Array<Project>
}

interface ProjectListProps {
  projectList: ProjectList
}

export default function ProjectList(props: ProjectListProps) {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  function wrapProjectIndex(index: number): number {

    if (index <= -1) {
      return (props.projectList.projects.length - 1);
    }
    else if (index >= props.projectList.projects.length) {
      return 0;
    }
    else {
      return index;
    }

  }

  function incrementProjectIndex() {
    setCurrentProjectIndex(wrapProjectIndex(currentProjectIndex + 1));
  }

  function decrementProjectIndex() {
    setCurrentProjectIndex(wrapProjectIndex(currentProjectIndex - 1));
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <ProjectListTileInactive project={props.projectList.projects[wrapProjectIndex(currentProjectIndex - 1)]} onClick={decrementProjectIndex} />
        <ProjectListTile project={props.projectList.projects[wrapProjectIndex(currentProjectIndex)]} />
        <ProjectListTileInactive project={props.projectList.projects[wrapProjectIndex(currentProjectIndex + 1)]} onClick={incrementProjectIndex} />
      </div>
      <div className="flex flex-row mx-auto my-4 justify-between w-1/4">
        <button className="text-2xl py-1 px-2 bg-slate-200 hover:bg-slate-400" onClick={decrementProjectIndex}>Left</button>
        <button className="text-2xl py-1 px-2 bg-slate-200 hover:bg-slate-400" onClick={incrementProjectIndex}>Right</button>
      </div>
    </div>
  );
}