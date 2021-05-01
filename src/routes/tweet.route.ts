import express from "express";
import TweetController from "../controllers/tweet.controller";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { username, content } = req.body;
    TweetController.createTweet(username, content).then((createdTweet) =>
      res.send(`created tweet, id: ${createdTweet.id}`)
    );
  } catch {
    res.status(300).send("failed to created tweet");
  }
});

export default router;
