import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidatorConstraint } from 'class-validator';
import { Repository } from 'typeorm';

import { Country } from '../entities/country.entity';
import { EnumValidatorConstraint } from './enum-validator-constraint';

@Injectable()
@ValidatorConstraint({ name: 'countryId', async: true })
export class CountryId extends EnumValidatorConstraint<Country> {
  constructor(@InjectRepository(Country) repository: Repository<Country>) {
    super(repository);
  }
}
