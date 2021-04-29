import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  post_id: number;

  @Column({ type: "timestamptz" })
  timestamp: Date;
}
