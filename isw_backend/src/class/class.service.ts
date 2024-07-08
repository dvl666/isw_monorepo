import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClassDto } from './dtos/createClass.dto';
import { Class } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ClassService {

    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService
    ) {}

    async getClasses() {
        return await this.prisma.class.findMany()
    }

    async createClass(data: CreateClassDto): Promise<Class> {
        return await this.prisma.class.create({
            data: data
        })
    }

    async addStudentToClass(classId: number, studentId: number) {
        return await this.prisma.class.update({
            where: { id: classId },
            data: {
                user: {
                    connect: { id: studentId }
                }
            }
        })
    }

    async getClassWithStudents(classId: number) {
        return await this.prisma.class.findUnique({
            where: { id: classId },
            include: {
                user: true
            }
        })
    }

}
