interface Project {
  id?: number;
  manager_id: number;
  title: string;
  program_deadline: string;
  vote_deadline: string;
}

type RequiredProject = Required<Project>;

class ProjectEntity {
  private projectArray: RequiredProject[];
  private projectId: number = 0;
  constructor() {
    this.projectArray = [];
  }

  isUniqueTitle = (x: string): x is string => {
    const repeatedItems = this.projectArray.find((item) => item.title === x);
    return repeatedItems === undefined;
  };

  add = (project: Project): string => {
    if (!this.isUniqueTitle(project.title)) {
      return `Project is exist!`;
    }

    const newProject: RequiredProject = {
      id: ++this.projectId,
      manager_id: project.manager_id,
      title: project.title,
      program_deadline: project.program_deadline,
      vote_deadline: project.vote_deadline,
    };
    this.projectArray = [...this.projectArray, newProject];
    return `Your project was added successfully!`;
  };

  get = (): Project[] => {
    return this.projectArray;
  };
}

const project1: Project = {
  manager_id: 2,
  title: "project 1",
  program_deadline: "2024-02-03",
  vote_deadline: "2024-08-03",
};

const project2: Project = {
  manager_id: 3,
  title: "project 2",
  program_deadline: "2024-08-02",
  vote_deadline: "2024-10-2",
};

const projects = new ProjectEntity();

projects.add(project1);
projects.add(project2);

export type { Project };

export const addProject = (project: Project): string => {
  return projects.add(project);
};

export const getProjects = (): Project[] => {
  return projects.get();
};
