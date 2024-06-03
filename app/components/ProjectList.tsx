import Project from "~/interfaces/Project";
import ProjectListTile from "~/components/ProjectListTile";

interface ProjectList {
  projects: Array<Project>
}

interface ProjectListProps {
  projectList: ProjectList
}

export default function ProjectList(props: ProjectListProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {props.projectList.projects.map(project => <ProjectListTile project={project} />)}
    </div>
  );
}