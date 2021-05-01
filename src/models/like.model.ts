import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity({ name: "likes" })
export class Like extends BaseEntity {
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
