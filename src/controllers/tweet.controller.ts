import { Tweet } from "../models/tweet.model";

export default class TweetController {
  static getAll = async (): Promise<Tweet[]> => {
    return await Tweet.find({ relations: ["likes", "retweets"] });
  };

  static getTweet = async (tweetId: number): Promise<Tweet | undefined> => {
    return await Tweet.findOne(tweetId);
  };

  static createTweet = async (
    username: string,
    textContent: string
  ): Promise<Tweet> => {
    const tweet = Tweet.create({ username, textContent });
    return await tweet.save();
  };
}
