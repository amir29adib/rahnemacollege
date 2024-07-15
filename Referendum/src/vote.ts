import { Program, getProgram, updateVoteNumber } from "./program";
import { Project, getProject } from "./project";

interface Vote {
  id?: number;
  user_id: number;
  program_id: number;
}

type RequiredVote = Required<Vote>;

class VoteEntity {
  private voteArray: RequiredVote[];
  private voteId: number = 0;
  constructor() {
    this.voteArray = [];
  }

  isProjectValid = (project_id: number): Project | undefined => {
    const project = getProject(project_id);
    return project;
  };

  isProgramValid = (program_id: number): Program | undefined => {
    const program = getProgram(program_id);
    return program;
  };

  isUniqueVote = (user_id: number, program_id: number): boolean => {
    const repeatedItems = this.voteArray.find(
      (item) => item.user_id === user_id && item.program_id === program_id
    );
    return repeatedItems === undefined;
  };

  isNotExpired = (project: Project): boolean => {
    const dateNow: Date = new Date();
    const dateVote: Date = new Date(project.vote_deadline);

    return dateVote >= dateNow;
  };

  add = (vote: Vote): string => {
    const program = this.isProgramValid(vote.program_id);
    if (program === undefined) {
      return `The program that you voted is not valid!`;
    }

    const project = getProject(program.project_id);
    if (project === undefined) {
      return `The project of program that you voted is not valid!`;
    }

    if (!this.isUniqueVote(vote.user_id, vote.program_id)) {
      return `You have already voted!`;
    }

    if (!this.isNotExpired(project)) {
      return `The opportunity to vote has ended!`;
    }

    const newVote: RequiredVote = {
      id: ++this.voteId,
      user_id: vote.user_id,
      program_id: vote.program_id,
    };
    this.voteArray = [...this.voteArray, newVote];
    updateVoteNumber(vote.program_id);

    return `Your vote was added successfully!`;
  };

  get = (id: number): RequiredVote | undefined => {
    const foundedItems = this.voteArray.find((item) => item.id === id);
    return foundedItems;
  };

  getList = (): RequiredVote[] => {
    return this.voteArray;
  };
}

const votes = new VoteEntity();

export type { Vote };

export const addVote = (vote: Vote): string => {
  return votes.add(vote);
};

export const getVote = (id: number): RequiredVote | undefined => {
  return votes.get(id);
};

export const getVotes = (): RequiredVote[] => {
  return votes.getList();
};
