import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { UserInfos } from './userInfos.model';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  // TODO: Change some datas (APIKEY, FROM) with env file
  async sendMail(userInfos: UserInfos) {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey('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')
    
    const msg = {
      to: 'melvyn.rouault@gmail.com', // Change to your recipient
      from: 'madame.paperasse.rennes@gmail.com', // Change to your verified sender
      subject: 'Email Confirmation',
      html: `Bonjour Madame paperasse! <br /> Une personne vous a envoyé un message via votre site internet en indiquant l'adresse mail suivante : ${userInfos.email}. <br /> Voici son message : ${userInfos.message}`,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
