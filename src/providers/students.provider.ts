import { Connection, Repository } from 'typeorm';
import { Students } from '../entities/students.entity';

export const studentsProviders = [
  {
    provide: 'STUDENTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Students),
    inject: ['DATABASE_CONNECTION'],
  },
];