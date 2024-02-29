import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @Column()
  id: string;

  @Column()
  username: string;

  @Column()
  onboarding: boolean;

  @Column()
  weight: number;
}
