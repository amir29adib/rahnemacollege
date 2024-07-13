interface Vote {
  id?: number;
  user_id: number;
  plan_id: number;
}

class VoteEntity {
  private voteArray: Vote[];
  private voteId: number = 0;
  constructor() {
    this.voteArray = [];
  }

  add = (vote: Omit<Vote, "id">): void => {
    const newVote: Vote = {
    id: ++this.voteId,
    user_id: vote.user_id,
    plan_id: vote.plan_id,
    };
    this.voteArray = [...this.voteArray, newVote];
  };
}

const vote1: Vote = {
  user_id: 4,
  plan_id: 1,
};

const vote2: Vote = {
  user_id: 6,
  plan_id: 2,
};

const vote3: Vote = {
  user_id: 5,
  plan_id: 2,
};

const votes = new VoteEntity();

votes.add(vote1);
votes.add(vote2);
votes.add(vote3);
