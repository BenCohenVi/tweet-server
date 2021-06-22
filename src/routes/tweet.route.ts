import express from "express";
import LikeController from "../controllers/like.controller";
import RetweetController from "../controllers/retweet.controller";
import TweetController from "../controllers/tweet.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const tweets = await TweetController.getAll();
    const formattedTweets = tweets.map((tweet) => {
      const { likes, retweets, ...tweetData } = tweet;
      return {
        ...tweetData,
        likes_count: likes.length,
        retweets_count: retweets.length,
      };
    });
    res.send(formattedTweets);
  } catch (error) {
    res.send("couldn't get all tweets");
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, content } = req.body;
    const createdTweet = await TweetController.createTweet(username, content);
    res.send(`created tweet, id: ${createdTweet.id}`);
  } catch (error) {
    res.status(300).send("failed to created tweet");
    console.log(error);
  }
});

router.post("/:id/likes", async (req, res) => {
  try {
    const { username } = req.body;
    const tweetId = Number(req.params.id);
    const tweet = await TweetController.getTweet(tweetId);
    if (tweet != undefined) {
      LikeController.addLike(username, tweet)
        .then((addedLike) => res.send(`added like, id: ${addedLike.id}`))
        .catch((error) => res.send(error));
    } else {
      res.send("post_id doesn't exist");
    }
  } catch (error) {
    res.status(300).send("failed to add like");
    console.log(error);
  }
});

router.post("/:id/retweet", async (req, res) => {
  try {
    const { username } = req.body;
    const tweetId = Number(req.params.id);
    const tweet = await TweetController.getTweet(tweetId);
    if (tweet != undefined) {
      RetweetController.addRetweet(username, tweet)
        .then((addedRetweet) =>
          res.send(`added retweet, id: ${addedRetweet.id}`)
        )
        .catch((error) => res.send(error));
    } else {
      res.send("post_id doesn't exist");
    }
  } catch (error) {
    res.status(300).send("failed to add retweet");
    console.log(error);
  }
});

export default router;
