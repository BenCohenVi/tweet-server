import { ReTweet } from "../models/retweet.model";

export default class RetweetController {
  static addRetweet = async (
    username: string,
    tweetId: number
  ): Promise<ReTweet> => {
    const retweet = ReTweet.create({ username, post_id: tweetId });
    return await retweet.save();
  };
}
