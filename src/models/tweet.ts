import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  textContent: string;

  @Column()
  username: string;

  @Column()
  @CreateDateColumn({ type: "timestamptz" })
  timestamp: Date;
}
