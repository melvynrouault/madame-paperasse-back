import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './services/mail/mailer';
import { UserInfos } from './services/mail/userInfos.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mailService: MailService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sendEmail')
  async sendEmail(@Body() userInfos: UserInfos): Promise<void> {
    await this.mailService.sendMail(userInfos);
  }

}
