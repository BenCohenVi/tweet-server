import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { Tweet } from "./models/tweet";

const port = 3000;

const app = express();

app.use(express.json());

app.post("/tweets", (req: express.Request, res: express.Response) => {
  createConnection()
    .then((connection) => {
      const tweet = new Tweet();
      tweet.username = req.body.username;
      tweet.textContent = req.body.content;

      return connection.manager.save(tweet).then((tweet) => {
        res.send("Tweet has been saved. Tweet id is " + tweet.id);
      });
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));
