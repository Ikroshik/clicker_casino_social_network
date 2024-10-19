import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { hash } from 'argon2';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getById(id: string): Promise<User> {
    return (await this.userModel.findOne({where: {id}})).dataValues;
  }

  async getByEmail(email: string) {
    return (await this.userModel.findOne({where: {email}})).dataValues;
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      username: '',
      password: await hash(dto.password),
    }
    return (await this.userModel.create(user)).dataValues
  }

}
