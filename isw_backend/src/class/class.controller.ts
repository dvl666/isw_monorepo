import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dtos/createClass.dto';

@Controller('class')
export class ClassController {
  
  constructor(
    private readonly classService: ClassService
  ) {}

  @Get()
  async getClasses() {
    return this.classService.getClasses()
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

  @Get(':id')
  async getClassWithStudents(
    @Param('id') id: string
  ) {
    return this.classService.getClassWithStudents(parseInt(id))
  }

}
