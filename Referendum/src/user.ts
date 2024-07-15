type Role = "Manager" | "Agent" | "People";

interface User {
  id?: number;
  username: string;
  password: string;
  role: Role;
}

type RequiredUser = Required<User>;

class UserEntity {
  private userArray: RequiredUser[];
  private userId: number = 0;
  constructor() {
    this.userArray = [];
  }

  isUniqueUsername = (x: string): x is string => {
    const repeatedItems = this.userArray.find((item) => item.username === x);
    return repeatedItems === undefined;
  };

  add = (user: User): void => {
    if (this.isUniqueUsername(user.username)) {
      const newUser: RequiredUser = {
        id: ++this.userId,
        username: user.username,
        password: user.password,
        role: user.role,
      };
      this.userArray = [...this.userArray, newUser];
    }
  };

  login = (username: string, password: string): RequiredUser | undefined => {
    const foundUser = this.userArray.find(
      (item) => item.username === username && item.password === password
    );

    return foundUser;
  };
}

const manager: User = {
  username: "manager",
  password: "manager1234",
  role: "Manager",
};

const agent1: User = {
  username: "ali",
  password: "ali1234",
  role: "Agent",
};

const agent2: User = {
  username: "ali",
  password: "ali1234",
  role: "Agent",
};

const user1: User = {
  username: "amir",
  password: "amir1234",
  role: "People",
};

const user2: User = {
  username: "ahmad",
  password: "ahmad1234",
  role: "People",
};

const user3: User = {
  username: "zahra",
  password: "zahra1234",
  role: "People",
};

const isRole = (x: string): x is Role => {
  return ["Manager", "Agent", "People"].includes(x);
};

const users = new UserEntity();

users.add(manager);
users.add(agent1);
users.add(agent2);
users.add(user1);
users.add(user2);
users.add(user3);

export const loginUser = (
  username: string,
  password: string
): RequiredUser | undefined => {
  return users.login(username, password);
};
