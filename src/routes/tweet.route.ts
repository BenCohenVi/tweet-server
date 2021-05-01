import express from "express";
import LikeController from "../controllers/like.controller";
import RetweetController from "../controllers/retweet.controller";
import TweetController from "../controllers/tweet.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const allTweets = await await TweetController.getAll();
    const allTweetsWithMetadata = await Promise.all(
      allTweets.map(async (tweet) =>
        Object.assign(tweet, {
          likes_count: await LikeController.getLikesCount(tweet.id),
          retweets_count: await RetweetController.getRetweetsCount(tweet.id),
        })
      )
    );
    res.send(allTweetsWithMetadata);
  } catch {
    res.send("couldn't get all tweets");
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, content } = req.body;
    const createdTweet = await TweetController.createTweet(username, content);
    res.send(`created tweet, id: ${createdTweet.id}`);
  } catch {
    res.status(300).send("failed to created tweet");
  }
});

router.post("/:id/likes", async (req, res) => {
  try {
    const { username } = req.body;
    const tweetId = Number(req.params.id);
    if (await TweetController.isExists(tweetId)) {
      LikeController.addLike(username, tweetId)
        .then((addedLike) => res.send(`added like, id: ${addedLike.id}`))
        .catch((error) => res.send(error));
    } else {
      res.send("post_id doesn't exist");
    }
  } catch {
    res.status(300).send("failed to add like");
  }
});

router.post("/:id/retweet", async (req, res) => {
  try {
    const { username } = req.body;
    const tweetId = Number(req.params.id);
    if (await TweetController.isExists(tweetId)) {
      RetweetController.addRetweet(username, tweetId)
        .then((addedRetweet) =>
          res.send(`added retweet, id: ${addedRetweet.id}`)
        )
        .catch((error) => res.send(error));
    } else {
      res.send("post_id doesn't exist");
    }
  } catch {
    res.status(300).send("failed to add retweet");
  }
});

export default router;
