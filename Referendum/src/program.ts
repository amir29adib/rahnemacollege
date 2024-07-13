interface Program {
  id?: number;
  agent_id: number;
  plan_id: number;
}

class ProgramEntity {
  private programArray: Program[];
  private programId: number = 0;
  constructor() {
    this.programArray = [];
  }

  add = (program: Omit<Program, "id">): void => {
    const newProgram: Program = {
    id: ++this.programId,
    agent_id: program.agent_id,
    plan_id: program.plan_id,
    };
    this.programArray = [...this.programArray, newProgram];
  };
}

const program1: Program = {
  agent_id: 3,
  plan_id: 1,
};

const program2: Program = {
  agent_id: 2,
  plan_id: 2,
};

const programs = new ProgramEntity();

programs.add(program1);
programs.add(program2);
