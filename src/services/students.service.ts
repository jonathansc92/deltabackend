import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Students } from '../entities/students.entity';
@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENTS_REPOSITORY')
    private studentsRepository: Repository<Students>,
  ) {
  }

  async findAll(): Promise<Students[]> {
    return await this.studentsRepository
      .find({
    //   relations: [
    //     "addresses",
    //   ],
      select: [
        "id",
        "name",
        "photo"
      ]
    });
  }

  async findById(id: string): Promise<Students> {
    return await this.studentsRepository.findOne({
      where: { id },
      select: [
        "id",
        "name",
        "photo"
      ]
    //   relations: ['addresses'],
    });
  }

  async create(student: Students) {
    return await this.studentsRepository
      .save(student)
      .then((contact) => {
        return contact;
      })
      .catch((error) => {
        return error;
      });
  }

  async update(id: string, student: Students) {
    return await this.studentsRepository
      .update(id, student)
      .then(() => {
        return 'ok';
      })
      .catch((error) => {
      });
  }

  async delete(id: string) {
    return await this.studentsRepository
      .delete(id)
      .then((student) => {
      })
      .catch((error) => {
      });
  }
}
