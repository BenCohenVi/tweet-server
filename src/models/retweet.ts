import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReTweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number;

  @Column()
  username: string;

  @Column({ type: "timestamptz" })
  timestamp: Date;
}
