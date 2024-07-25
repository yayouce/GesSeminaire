import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommissionModule } from './commission/commission.module';
import { SeminaristeModule } from './seminariste/seminariste.module';
import { MaterielsModule } from './materiels/materiels.module';
import { RapportModule } from './rapport/rapport.module';
import { IndividusModule } from './individus/individus.module';
import { BadgeModule } from './badge/badge.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [
    CommissionModule, SeminaristeModule, MaterielsModule, RapportModule, IndividusModule, BadgeModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"], // la classe ts qui va etre l'image de la table
      synchronize: true, // en mode dev qu'il est conseiller de mettre True sinon en mode production on enlève
      
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
