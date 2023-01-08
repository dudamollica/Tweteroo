import express from "express";
import cors from "cors";

const server = express();
const users = [];
const tweets = [];

server.use(express.json());
server.use(cors());
server.listen(5000, () => {
  console.log("Servidor Funfou");
});

server.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

server.post("/tweets", (req, res) => {
  const newTweet = req.body
  const userAvatar = users.find((u)=> u.username == newTweet.username)
  tweets.push({...newTweet, avatar:userAvatar.avatar})
  res.send("OK")
});

server.get("/tweets", (req, res) => {
  const lastTen = tweets.filter((t, index)=> index >= tweets.length-10)
  res.send(lastTen);
});
