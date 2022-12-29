import { OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['charming-jawfish-10756-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2hhcm1pbmctamF3ZmlzaC0xMDc1NiTASjGP85DNlJWl2pWjONq0s1wkVwoe8nI',
          password: 'f6bfd4da4dcc4eabbc848267d51e666a',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
