import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(id: string): string {
    return `Service User ID: ${id}`;
  }

  signup(name: string, email: string, password: string, mobileNumber: string) {
    return `Signup successful for ${name} with email ${email} and mobile number ${mobileNumber}!`;
  }
}
