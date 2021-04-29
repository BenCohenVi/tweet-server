import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  textContent: string;

  @Column()
  username: string;

  @Column()
  timestamp: Date;
}
