import express, { json } from "express";
import { v4 as uuidv4 } from "uuid";
import userRouter from "./routers/users.routes";
import "dotenv/config";

const app = express();
app.use(express.json());
const db = require("../dbconfig");
app.use("", userRouter);
const ports = {
  development: 9000,
  test: 9001,
};
const port = ports[process.env.ENVIROMENT] || 1000;

const user = [];

// app.post("/user", async (req, res) => {
//   const { name, email, password, isAdm } = req.body;
//   const newUser = { name, email, password, isAdm, uuid: uuidv4() };
//   const user = await db("users").insert(newUser);
//   console.log(user);
//   try {
//     user.push(newUser);
//     return res.status(201).json(newUser);
//   } catch (error) {
//     return res.status(400);
//   }
// });

// app.get("/user", async (req, res) => {
//   const user = await db("users");
//   return res.status(200).json(user);
// });

app.listen(port, () => {
  // console.log(`application run port ${port}`);
});

export default app;
