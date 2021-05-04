import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Like } from "./like.model";
import { ReTweet } from "./retweet.model";

@Entity({ name: "tweets" })
export class Tweet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ type: "text" })
  textContent: string;

  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  timestamp: Date;

  @OneToMany(() => Like, (like) => like.post)
  likes: Like[];

  @OneToMany(() => ReTweet, (retweet) => retweet.post)
  retweets: ReTweet[];
}
