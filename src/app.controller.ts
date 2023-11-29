import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('signup')
  signup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('mobileNumber') mobileNumber: string,
  ): string {
    // Call the signup method from the AppService
    return this.appService.signup(name, email, password, mobileNumber);
  }
}
