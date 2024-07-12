import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dtos/createClass.dto';
import { retry } from 'rxjs';

@Controller('class')
export class ClassController {
  
  constructor(
    private readonly classService: ClassService
  ) {}

  @Get()
  async getClasses() {
    return this.classService.getClasses()
  }

  @Get('get-classes-for/:id')
  async getClassesForStudent(
    @Param('id') id: string
  ) {
    return this.classService.getClassesFotStudent(parseInt(id))
  }

  @Post('create-class')
  async createClass(
    @Body() createClassDto: CreateClassDto
  ) {
    return this.classService.createClass(createClassDto)
  }

  @Post('add-student')
  async addStudentToClass(
    @Body() body: { classId: string, studentId: string }
  ) {
    return this.classService.addStudentToClass(parseInt(body.classId), parseInt(body.studentId))
  }

  @Post('remove-student-from-class')
  async removeStudentFromClass(
    @Body() body: { classId: string, studentId: string }
  ) {
    return this.classService.removeStudentFromClass(parseInt(body.classId), parseInt(body.studentId))
  }

  @Get('get-classes-not-enrolled/:id')
  async getClassesNotEnrolledByStudent (
    @Param('id') id: string
  ) {
    return this.classService.getClassesNotEnrolledByStudent(parseInt(id))
  }

  @Get(':id')
  async getClassWithStudents(
    @Param('id') id: string
  ) {
    return this.classService.getClassWithStudents(parseInt(id))
  }

}
