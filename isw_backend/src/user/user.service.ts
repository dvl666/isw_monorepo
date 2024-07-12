import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService
    ) {}

    async logIn(email: string, password: string) {
        console.log(email, password)
        console.log('hola')
        const user = await this.prisma.user.findUnique({
            where: { email: email }
        })
        if (user! && user.password === password) {
            return user
        } else {
            throw new BadRequestException('Credenciales invalidas')
        }
    }

    async getUsers() {
        return this.prisma.user.findMany()
    }

    async getUser(id: number) {
        console.log(id)
        return this.prisma.user.findUnique({
            where: { id: id },
        })
    }

    async createTeacherUser(data: Prisma.UserCreateInput): Promise<User> {
        const userRole = 'teacher'
        const userData = { ...data, role: userRole }
        return this.prisma.user.create({
            data: userData
        })
    }

    async createStudentUser(data: Prisma.UserCreateInput): Promise<User> {
        const userRole = 'student'
        const userData = { ...data, role: userRole, active: true }
        return this.prisma.user.create({
            data: userData
        })
    }

    async createAdminUser(data: Prisma.UserCreateInput): Promise<User> {
        const userRole = 'admin'
        const userData = { ...data, role: userRole, active: true }
        return this.prisma.user.create({
            data: userData
        })
    }

    async acceptTeacherRequest(teacherId: number) {
        const teacher = await this.getUser(teacherId)
        console.log(teacher)
        const teacherData = { ...teacher, active: true }
        return this.prisma.user.update({
            where: { id: teacher.id },
            data: teacherData
        })
    }

}
