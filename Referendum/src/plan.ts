interface Plan {
  id?: number;
  agent_id: number,
  title: string;
  program_deadline: string;
  vote_deadline: string;
}

class PlanEntity {
  private planArray: Plan[];
  private planId: number = 0;
  constructor() {
    this.planArray = [];
  }

  isUniqueTitle = (x: string): x is string => {
    const repeatedItems = this.planArray.find((item) => item.title === x);
    return repeatedItems === undefined;
  };

  add = (plan: Omit<Plan, "id">): void => {
    if (this.isUniqueTitle(plan.title)) {
      const newPlan: Plan = {
        id: ++this.planId,
        agent_id: plan.agent_id,
        title: plan.title,
        program_deadline: plan.program_deadline,
        vote_deadline: plan.vote_deadline,
      };
      this.planArray = [...this.planArray, newPlan];
    }
  };
}

const plan1: Plan = {
  agent_id: 2,
  title: "plan 1",
  program_deadline: "2024-02-03",
  vote_deadline: "2024-08-03",
};

const plan2: Plan = {
  agent_id: 3,
  title: "plan 2",
  program_deadline: "2024-08-02",
  vote_deadline: "2024-10-2",
};

const plans = new PlanEntity();

plans.add(plan1);
plans.add(plan2);