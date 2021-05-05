import express from "express";
import RetweetController from "../controllers/retweet.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const retweets = await RetweetController.getAll();
    const formattedRetweets = retweets.map((retweet) => {
      const { post, ...retweetData } = retweet;
      return {
        ...retweetData,
        tweet_id: post.id,
        tweet_user: post.username,
        tweet_content: post.textContent,
      };
    });
    res.send(formattedRetweets);
  } catch (error) {
    res.send("couldn't get all retweets");
    console.log(error);
  }
});

export default router;
