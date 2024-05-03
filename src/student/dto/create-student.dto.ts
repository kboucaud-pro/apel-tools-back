import { IsAlpha, IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { Classroom } from "src/classroom/entities/classroom.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";

export class CreateStudentDto {

	@IsNotEmpty()
	@IsString()
	@IsAlpha(null, {
		message: 'Merci de n\ utiliser que des lettres dans le prénom',
	})
	firstName: string;

	@IsNotEmpty()
	@IsString()
	@IsAlpha(null, {
		message: 'Merci de n\ utiliser que des lettres dans le nom de famille',
	})
	lastName: string;

	@IsNotEmpty()
	classroom: Classroom;

	@IsEmpty()
	tickets: Ticket[];
}
