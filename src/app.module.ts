import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, PaymentsModule],
})
export class AppModule {}
