/* eslint-disable prettier/prettier */
import { Body, Controller, Get,Post,Param,Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return  this.userService.getUsers();
    
  }
  @Get(':fireBaseUid')
  getUserById(@Param('fireBaseUid') fireBaseUid: string) {
      return this.userService.getUserByFireBaseUid(fireBaseUid);
  }
  @Post('addUser')
  signup(@Body('fireBaseUid') fireBaseUid:string,    
        @Body('name') name:string,
        ){
    return this.userService.AddUser(fireBaseUid,name);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
      return this.userService.delete(id);
  }
  @Put(':id')
  async updateUser(
     
        @Body('name') name:string,
        @Param('id') id:string
  ){
    return this.userService.updateUser(id,name)
  }
}
