import express from "express";
import RetweetController from "../controllers/retweet.controller";
import TweetController from "../controllers/tweet.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const allRetweets = await RetweetController.getAll();
    const allRetweetsWithMetadata = await Promise.all(
      allRetweets.map(async (retweet) => {
        const tweet = await TweetController.getTweet(retweet.post_id);
        return {
          content: tweet?.textContent,
          retweet_user: retweet.username,
          tweet_id: retweet.post_id,
          tweet_user: tweet?.username,
          timestamp: retweet.timestamp,
        };
      })
    );

    res.send(allRetweetsWithMetadata);
  } catch {
    res.send("couldn't get all retweets");
  }
});

export default router;
