import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StudentsController } from '../controllers/students.controller';
import { studentsProviders } from '../providers/students.provider';
import { StudentsService } from '../services/students.service';
@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [StudentsController],
  providers: [...studentsProviders, StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
