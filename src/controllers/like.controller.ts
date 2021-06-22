import { Like } from "../models/like.model";
import { Tweet } from "../models/tweet.model";

export default class LikeController {
  static addLike = async (username: string, tweet: Tweet): Promise<Like> => {
    const like = Like.create({ username, post: tweet });
    return await like.save();
  };
}
