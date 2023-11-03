import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const day = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
});

app.get("/", (req, res) => {
  res.render("index.ejs", { today: day, todayList: toDoList });
});

app.post("/", (req, res) => {
  //   console.log(req.body["newItem"]);
  toDoList.push(req.body["newItem"]);
  res.render("index.ejs", { today: day, todayList: toDoList });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { jobList: workList });
});

app.post("/work", (req, res) => {
  //   console.log(req.body["newItem"]);
  workList.push(req.body["newItem"]);
  res.render("work.ejs", { jobList: workList });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const toDoList = [];

const workList = [];
