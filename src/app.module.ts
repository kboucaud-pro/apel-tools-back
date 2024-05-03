import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { TicketModule } from './ticket/ticket.module';
import { ClassroomModule } from './classroom/classroom.module';
import { Classroom } from './classroom/entities/classroom.entity';
import { Student } from './student/entities/student.entity';
import { Ticket } from './ticket/entities/ticket.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      password: 'SUm7XMfN',
      username: 'postgres',
      entities: [Classroom, Student, Ticket],
      database: 'apel-tools',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    StudentModule,
    TicketModule,
    ClassroomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
