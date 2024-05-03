import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) { }
  create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket: Ticket = new Ticket();
    ticket.number = createTicketDto.number;
    ticket.isActive = createTicketDto.isActive;
    ticket.isValid = createTicketDto.isValid;
    ticket.isWinner = createTicketDto.isWinner;
    ticket.rewardNumber = createTicketDto.rewardNumber;
    ticket.student = createTicketDto.student;
    return this.ticketRepository.save(ticket);
  }

  findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  findOne(id: number): Promise<Ticket> {
    return this.ticketRepository.findOneBy({ id });
  }

  update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const ticket: Ticket = new Ticket();
    ticket.number = updateTicketDto.number;
    ticket.isActive = updateTicketDto.isActive;
    ticket.isValid = updateTicketDto.isValid;
    ticket.isWinner = updateTicketDto.isWinner;
    ticket.rewardNumber = updateTicketDto.rewardNumber;
    ticket.student = updateTicketDto.student;
    ticket.id = id;
    return this.ticketRepository.save(ticket);
  }

  remove(id: number) {
    return this.ticketRepository.delete(id);
  }
}
