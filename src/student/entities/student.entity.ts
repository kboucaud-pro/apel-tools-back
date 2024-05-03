import { Classroom } from "src/classroom/entities/classroom.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 20 })
	firstName: string;

	@Column({ type: 'varchar', length: 30 })
	lastName: string;

	@ManyToOne(() => Classroom, (classroom) => classroom.students)
	classroom: Classroom;

	@OneToMany(() => Ticket, (ticket) => ticket.student)
	tickets: Ticket[];
}
