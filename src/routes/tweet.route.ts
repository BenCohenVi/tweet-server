import express from "express";
import LikeController from "../controllers/like.controller";
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

router.post("/:id/likes", async (req, res) => {
  try {
    const { username } = req.body;
    const tweetId = Number(req.params.id);
    if (await TweetController.isExists(tweetId)) {
      LikeController.addLike(username, tweetId).then((addedLike) =>
        res.send(`added like, id: ${addedLike.id}`)
      );
    } else {
      res.send("post_id doesn't exist");
    }
  } catch {
    res.status(300).send("failed to add like");
  }
});

export default router;
