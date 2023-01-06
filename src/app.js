import express from "express";
import cors from "cors"

const server = express()
server.use(cors())
server.listen(5000, ()=>{
    console.log("Servidor Funfou")
})

server.get("/tweets",(req,res)=>{
    res.send([{username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	}])
})