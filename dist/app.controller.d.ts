import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    signup(name: string, email: string, password: string, mobileNumber: string): string;
}
