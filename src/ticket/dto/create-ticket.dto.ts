import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";
import { Student } from "src/student/entities/student.entity";

export class CreateTicketDto {

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	number: number;

	@IsBoolean()
	isValid: boolean = true;

	@IsBoolean()
	isActive: boolean = true;
	
	@IsBoolean()
	isWinner: boolean = false;

	@IsOptional()
	@IsNumber()
	rewardNumber: number | null = null;

	@IsNotEmpty()
	student: Student;
}
