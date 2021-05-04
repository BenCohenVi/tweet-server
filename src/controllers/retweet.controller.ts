import { ReTweet } from "../models/retweet.model";
import { Tweet } from "../models/tweet.model";

export default class RetweetController {
  static getAll = async (): Promise<ReTweet[]> => {
    return await ReTweet.find({ relations: ["post"] });
  };

  static addRetweet = async (
    username: string,
    tweet: Tweet
  ): Promise<ReTweet> => {
    const retweet = ReTweet.create({ username, post: tweet });
    return await retweet.save();
  };
}
