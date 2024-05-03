import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/classroom.entity';
import { Student } from 'src/student/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom, Student])],
  controllers: [ClassroomController],
  providers: [ClassroomService],
})
export class ClassroomModule {}
