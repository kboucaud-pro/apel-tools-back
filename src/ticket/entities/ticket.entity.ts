import { Student } from "src/student/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'int' })
	number: number;

	@Column({ type: 'boolean' })
	isValid: boolean;

	@Column({ type: 'boolean' })
	isActive: boolean;

	@Column({ type: 'boolean' })
	isWinner: boolean;

	@Column({ type: 'int' })
	rewardNumber: number | null;

	@ManyToOne(() => Student, (student) => student.tickets)
	student: Student;
}
