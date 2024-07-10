export class CreateUserDto {
    email: string
    password: string
    name: string
    specialty?: string
    contactNumber: number
    role?: string
    active?: boolean
}