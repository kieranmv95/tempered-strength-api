import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'exercises' })
export class Exercise {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  loggingType: string;

  @Column({ type: 'tinyint', width: 1, name: 'public' })
  isPublic: boolean;
}
