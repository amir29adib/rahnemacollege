import { Router } from "express";

export const app = Router();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
