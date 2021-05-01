import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({ name: "retweets" })
export class ReTweet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  post_id: number;

  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  timestamp: Date;
}
