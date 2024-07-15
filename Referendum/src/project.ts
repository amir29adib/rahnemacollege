interface Project {
  id?: number;
  user_id: number;
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

  isUniqueTitle = (x: string): boolean => {
    const repeatedItems = this.projectArray.find((item) => item.title === x);
    return repeatedItems === undefined;
  };

  add = (project: Project): string => {
    if (!this.isUniqueTitle(project.title)) {
      return `Project is exist!`;
    }

    const newProject: RequiredProject = {
      id: ++this.projectId,
      user_id: project.user_id,
      title: project.title,
      program_deadline: project.program_deadline,
      vote_deadline: project.vote_deadline,
    };
    this.projectArray = [...this.projectArray, newProject];
    return `Your project was added successfully!`;
  };

  get = (id: number): RequiredProject | undefined => {
    const foundedItems = this.projectArray.find((item) => item.id === id);
    return foundedItems;
  };

  getList = (): RequiredProject[] => {
    return this.projectArray;
  };
}

const project1: Project = {
  user_id: 1,
  title: "project 1",
  program_deadline: "2024-02-03",
  vote_deadline: "2024-08-03",
};

const project2: Project = {
  user_id: 1,
  title: "project 2",
  program_deadline: "2024-08-02",
  vote_deadline: "2024-10-2",
};

const project3: Project = {
  user_id: 1,
  title: "project 3",
  program_deadline: "2024-08-04",
  vote_deadline: "2024-10-4",
};

const projects = new ProjectEntity();

projects.add(project1);
projects.add(project2);
projects.add(project3);

export type { Project };

export const addProject = (project: Project): string => {
  return projects.add(project);
};

export const getProject = (id: number): RequiredProject | undefined => {
  return projects.get(id);
};

export const getProjects = (): RequiredProject[] => {
  return projects.getList();
};
