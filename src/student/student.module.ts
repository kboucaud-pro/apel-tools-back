import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Classroom } from 'src/classroom/entities/classroom.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Classroom, Ticket])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
