import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private readonly classroomRepository: Repository<Classroom>,
  ) { }

  create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    const classroom: Classroom = new Classroom();
    classroom.name = createClassroomDto.name;
    return this.classroomRepository.save(classroom);
  }

  findAll(): Promise<Classroom[]> {
    return this.classroomRepository.find();
  }

  findOne(id: number): Promise<Classroom> {
    return this.classroomRepository.findOneBy({ id });
  }

  update(id: number, updateClassroomDto: UpdateClassroomDto) {
    const classroom: Classroom = new Classroom();
    classroom.name = updateClassroomDto.name;
    classroom.id = id;
    return this.classroomRepository.save(classroom);
  }

  remove(id: number) {
    return this.classroomRepository.delete(id);
  }
}
