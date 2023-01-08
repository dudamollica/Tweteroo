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
  res.status(201).send("OK");
});

server.post("/tweets", (req, res) => {
  const newTweet = req.body
  const userAvatar = users.find((u)=> u.username == newTweet.username)
  tweets.push({...newTweet, avatar:userAvatar.avatar})
  console.log(userAvatar)
  if(userAvatar){
  res.status(201).send("OK")
  }else{
  res.status(401).send("UNAUTHORIZED")
  }
});

server.get("/tweets", (req, res) => {
  const lastTen = tweets.filter((t, index)=> index >= tweets.length-10)
  res.send(lastTen);
});
