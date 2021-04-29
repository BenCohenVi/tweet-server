import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  textContent: string;

  @Column()
  username: string;

  @Column({ type: "timestamptz" })
  timestamp: Date;
}
