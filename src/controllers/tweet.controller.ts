import { Tweet } from "../models/tweet.model";

export default class TweetController {
  static createTweet = async (
    username: string,
    textContent: string
  ): Promise<Tweet> => {
    const tweet = Tweet.create({ username, textContent });
    return await tweet.save();
  };

  static isExists = async (tweetId: number): Promise<boolean> => {
    const retrievedTweet = await Tweet.findOne(tweetId);
    return retrievedTweet ? true : false;
  };
}
