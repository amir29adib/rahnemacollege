import { Project, getProject } from "./project";

interface Program {
  id?: number;
  title: string;
  user_id: number;
  project_id: number;
  vote_number?: number;
}

type RequiredProgram = Required<Program>;

class ProgramEntity {
  private programArray: RequiredProgram[];
  private programId: number = 0;
  constructor() {
    this.programArray = [];
  }

  isUniqueProgram = (user_id: number, project_id: number): boolean => {
    const repeatedItems = this.programArray.find(
      (item) => item.user_id === user_id && item.project_id === project_id
    );
    return repeatedItems === undefined;
  };

  isNotExpired = (project: Project): boolean => {
    const dateNow: Date = new Date();
    const dateProgram: Date = new Date(project.program_deadline);

    return dateProgram >= dateNow;
  };

  add = (program: Program): string => {
    const project = getProject(program.project_id);
    if (project === undefined) {
      return `The project of your program is not valid!`;
    }

    if (!this.isUniqueProgram(program.user_id, program.project_id)) {
      return `A Program has already been added by you!`;
    }

    if (!this.isNotExpired(project)) {
      return `The opportunity to add program has ended!`;
    }

    const newProgram: RequiredProgram = {
      id: ++this.programId,
      title: program.title,
      user_id: program.user_id,
      project_id: program.project_id,
      vote_number: 0,
    };
    this.programArray = [...this.programArray, newProgram];

    return `Your program was added successfully!`;
  };

  get = (id: number): RequiredProgram | undefined => {
    const foundedItems = this.programArray.find((item) => item.id === id);
    return foundedItems;
  };

  vote = (id: number): void => {
    const votedItems = this.programArray.find((item) => item.id === id);
    if (votedItems) {
      ++votedItems.vote_number;
    }
  };

  getList = (): RequiredProgram[] => {
    return this.programArray;
  };
}

const program1: Program = {
  title: "program 1",
  user_id: 3,
  project_id: 2,
};

const program2: Program = {
  title: "program 2",
  user_id: 3,
  project_id: 3,
};

const programs = new ProgramEntity();

programs.add(program1);
programs.add(program2);

export type { Program };

export const addProgram = (program: Program): string => {
  return programs.add(program);
};

export const getProgram = (id: number): RequiredProgram | undefined => {
  return programs.get(id);
};

export const getPrograms = (): RequiredProgram[] => {
  return programs.getList();
};

export const updateVoteNumber = (id: number): void => {
  programs.vote(id);
};
