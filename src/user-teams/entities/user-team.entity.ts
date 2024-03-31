import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'userTeams' })
export class UserTeam {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  userId: string;

  @Column({ type: 'varchar', length: 255 })
  teamId: string;
}
