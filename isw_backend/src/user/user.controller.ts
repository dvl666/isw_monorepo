import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  
  constructor(
    private readonly userService: UserService
  ) {}

  @Get(':id')
  async getUser(
    @Param('id') id: string
  ) {
    return this.userService.getUser(parseInt(id))
  }

  @Post('login')
  async logIn(
    @Body() body: { email: string, password: string }
  ) {
    return this.userService.logIn(body.email, body.password)
  }

  @Post('create-teacher')
  async createTeacherUser(
    @Body() createUserDto: CreateUserDto
  ) {
    return this.userService.createTeacherUser(createUserDto)
  }

  @Post('create-student')
  async createStudentUser(
    @Body() createUserDto: CreateUserDto
  ) {
    return this.userService.createStudentUser(createUserDto)
  }

  @Post('create-admin')
  async createAdminUser(
    @Body() createUserDto: CreateUserDto
  ) {
    return this.userService.createAdminUser(createUserDto)
  }

  @Post('accept-request')
  async acceptRequest (
    @Body() body: { id: string }
  ) {
    return this.userService.acceptTeacherRequest(parseInt(body.id))
  }

  @Get('')
  async getUsers() {
    return this.userService.getUsers()
  }

}
