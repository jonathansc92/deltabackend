import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from '../services/students.service';
import { StudentsDto } from 'src/dtos/students.dto';
import { Students } from 'src/entities/students.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('/')
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id) {
    return await this.studentsService.findById(id);
  }

  @Post()
  @HttpCode(204)
  async create(@Body() student: Students){
    return await this.studentsService.create(student);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() student: Students) {
    return await this.studentsService.update(id, student);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.studentsService.delete(id);
  }
}
