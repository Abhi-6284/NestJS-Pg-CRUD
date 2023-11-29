import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'customers' })
export class Cust {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  mobileNumber: string;
}
