import express from "express";
import bodyParser from "body-parser";
import { loginUser } from "./user";

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
      return res.redirect(`/plans/${user.username}`);
    case "Agent":
      return res.redirect("/programs");
    case "People":
      return res.redirect("/votes");
    default:
      JSON.stringify({
        message: "No such role exists!",
      });
  }
});

app.get("/plans:username", (req, res) => {
  const username = req.params.username.toString();
  JSON.stringify({
    message: `Hello ${username}! You have access of Manager to add plan in route '/plan/add' with method post!`,
  });
});

app.get("/programs:username", (req, res) => {
  const username = req.params.username.toString();
  JSON.stringify({
    message: `Hello ${username}! You have access of Agent to add program in route '/program/add' with method post!`,
  });
});

app.get("/votes:username", (req, res) => {
  const username = req.params.username.toString();
  JSON.stringify({
    message: `Hello ${username}! You have access of People to vote in route '/vote/add' with method post!`,
  });
});
