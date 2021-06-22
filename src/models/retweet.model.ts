import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Tweet } from "./tweet.model";

@Entity({ name: "retweets" })
export class ReTweet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @ManyToOne(() => Tweet, (post) => post.retweets)
  post: Tweet;

  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  timestamp: Date;
}
