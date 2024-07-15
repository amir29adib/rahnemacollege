interface Program {
  id?: number;
  agent_id: number;
  project_id: number;
}

type RequiredProgram = Required<Program>;

class ProgramEntity {
  private programArray: RequiredProgram[];
  private programId: number = 0;
  constructor() {
    this.programArray = [];
  }

  add = (program: Program): void => {
    const newProgram: RequiredProgram = {
      id: ++this.programId,
      agent_id: program.agent_id,
      project_id: program.project_id,
    };
    this.programArray = [...this.programArray, newProgram];
  };
}

const program1: Program = {
  agent_id: 3,
  project_id: 1,
};

const program2: Program = {
  agent_id: 2,
  project_id: 2,
};

const programs = new ProgramEntity();

programs.add(program1);
programs.add(program2);
