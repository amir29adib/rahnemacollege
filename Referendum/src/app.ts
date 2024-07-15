import express from "express";
import bodyParser from "body-parser";
import { loginUser } from "./user";
import { Project, addProject, getProjects } from "./project";
import { Program, addProgram, getPrograms } from "./program";
import { Vote, addVote, getVotes } from "./vote";

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      message: "Welcome! Please go to route user/login for login!",
    })
  );
});

app.post("/user/login", (req, res) => {
  const username = req.body.username?.toString();
  const password = req.body.password?.toString();

  if (!username || !password) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username and password are required!" }));
  }

  const user = loginUser(username, password);

  if (user === undefined) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username or password is incorrect!" }));
  }

  switch (user.role) {
    case "Manager":
      return res.send(
        JSON.stringify({
          message: `Hello ${username}! You have access of Manager to add project in route '/project/add' with method post!`,
        })
      );
    case "Agent":
      return res.send(
        JSON.stringify({
          message: `Hello ${username}! You have access of Agent to add program in route '/program/add' with method post!`,
        })
      );
    case "People":
      return res.send(
        JSON.stringify({
          message: `Hello ${username}! You have access of People to vote in route '/vote/add' with method post!`,
        })
      );
    default:
      JSON.stringify({
        message: "No such role exists!",
      });
  }
});

app.post("/project/add", (req, res) => {
  const username = req.query.username?.toString();
  const password = req.query.password?.toString();

  if (!username || !password) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username and password are required!" }));
  }

  const user = loginUser(username, password);

  if (user === undefined) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username or password is incorrect!" }));
  }

  const user_id = user.id;
  const title = req.body.title?.toString();
  const program_deadline = req.body.program_deadline?.toString();
  const vote_deadline = req.body.vote_deadline?.toString();

  const newProject: Project = {
    user_id: user_id,
    title: title,
    program_deadline: program_deadline,
    vote_deadline: vote_deadline,
  };

  switch (user.role) {
    case "Manager":
      const messageAdd = addProject(newProject);
      const resultAdd = {
        message: messageAdd,
        data: getProjects(),
      };
      return res.send(JSON.stringify(resultAdd));
    default:
      return res.status(403).send(
        JSON.stringify({
          message: "You don't have permission to add project!",
        })
      );
  }
});

app.post("/program/add", (req, res) => {
  const username = req.query.username?.toString();
  const password = req.query.password?.toString();

  if (!username || !password) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username and password are required!" }));
  }

  const user = loginUser(username, password);

  if (user === undefined) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username or password is incorrect!" }));
  }

  const user_id = user.id;
  const title = req.body.title;
  const project_id = req.body.project_id;

  const newProgram: Program = {
    title: title,
    user_id: user_id,
    project_id: project_id,
  };

  switch (user.role) {
    case "Agent":
      const messageAdd = addProgram(newProgram);
      const resultAdd = {
        message: messageAdd,
        data: getPrograms(),
      };
      return res.send(JSON.stringify(resultAdd));
    default:
      return res.status(403).send(
        JSON.stringify({
          message: "You don't have permission to add program!",
        })
      );
  }
});

app.post("/vote/add", (req, res) => {
  const username = req.query.username?.toString();
  const password = req.query.password?.toString();

  if (!username || !password) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username and password are required!" }));
  }

  const user = loginUser(username, password);

  if (user === undefined) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Username or password is incorrect!" }));
  }

  const user_id = user.id;
  const program_id = req.body.program_id;

  const newVote: Vote = {
    user_id: user_id,
    program_id: program_id,
  };

  switch (user.role) {
    case "People":
      const messageAdd = addVote(newVote);
      const resultAdd = {
        message: messageAdd,
        data: getPrograms(),
      };
      return res.send(JSON.stringify(resultAdd));
    default:
      return res.status(403).send(
        JSON.stringify({
          message: "You don't have permission to vote!",
        })
      );
  }
});
