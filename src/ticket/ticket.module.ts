import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { Student } from 'src/student/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Student])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
