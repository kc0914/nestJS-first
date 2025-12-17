import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  private notes: CreateNoteDto[] = [];

  findAll() {
    return this.notes;
  }

  create(createNoteDto: CreateNoteDto) {
    this.notes.push(createNoteDto);
    return createNoteDto;
  }
}
