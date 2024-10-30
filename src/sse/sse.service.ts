import { Injectable, OnModuleInit } from '@nestjs/common';

import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SseService implements OnModuleInit {
  constructor(private eventEmitter: EventEmitter2) {}

  onModuleInit() {
    setInterval(async () => {
      this.sse();
    }, 5000);
  }

  async sse() {
    this.eventEmitter.emit('sse.event', {
      message: 'Hello from the server',
      randomNumber: Math.random(),
    });
  }
}
