import { Controller, Header, Sse } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, map, Observable } from 'rxjs';

@Controller('events')
export class SseController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Header('Access-Control-Allow-Origin', '*')
  @Sse('stream')
  async sse(): Promise<Observable<any>> {
    return fromEvent(this.eventEmitter, 'sse.event').pipe(
      map((payload) => ({
        data: JSON.stringify(payload),
      })),
    );
  }
}
