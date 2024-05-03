import { IsAlphanumeric, IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { Student } from "src/student/entities/student.entity";

export class CreateClassroomDto {

	@IsNotEmpty()
	@IsString()
	@IsAlphanumeric(null, {
		message: 'Merci de n\'utiliser que des caractères alphanumériques'
	})
	name: string;

	@IsEmpty()
	students: Student[];
}
