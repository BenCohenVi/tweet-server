import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Tweet } from "./tweet.model";

@Entity({ name: "likes" })
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @ManyToOne(() => Tweet, (tweet) => tweet.likes)
  post: Tweet;

  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  timestamp: Date;
}
