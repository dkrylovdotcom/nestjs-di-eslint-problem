import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';

import { CountryId } from './validators/country-id.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [],
  providers: [CountryId],
})
export class SomeModule {}
