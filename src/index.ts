import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import tweetRouter from "./routes/tweet.route";

const port = 3000;

const app = express();

app.use(express.json());

app.use("/tweets", tweetRouter);

createConnection()
  .then(() => {
    app.listen(port, () =>
      console.log(`The server is listening on port ${port}`)
    );
  })
  .catch((error) =>
    console.log(`couldn't connect to database, error: ${error}`)
  );
