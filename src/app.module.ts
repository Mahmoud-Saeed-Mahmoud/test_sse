import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [EventEmitterModule.forRoot(), SseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
