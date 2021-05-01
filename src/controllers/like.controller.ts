import { Like } from "../models/like.model";

export default class LikeController {
  static addLike = async (username: string, tweetId: number): Promise<Like> => {
    const like = Like.create({ username, post_id: tweetId });
    return await like.save();
  };
}
