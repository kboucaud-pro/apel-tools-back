import { Student } from "src/student/entities/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Classroom {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 15 })
	name: string;

	@OneToMany(() => Student, (student) => student.classroom)
	students: Student[];
}
