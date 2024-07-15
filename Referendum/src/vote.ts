interface Vote {
  id?: number;
  user_id: number;
  plan_id: number;
}

type RequiredVote = Required<Vote>;

class VoteEntity {
  private voteArray: RequiredVote[];
  private voteId: number = 0;
  constructor() {
    this.voteArray = [];
  }

  add = (vote: Vote): void => {
    const newVote: RequiredVote = {
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
