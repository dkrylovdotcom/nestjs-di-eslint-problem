import { ValidatorConstraintInterface } from 'class-validator';
import { Repository } from 'typeorm';

type EntityWithId = { id: string | number };

export abstract class EnumValidatorConstraint<Entity extends EntityWithId>
  implements ValidatorConstraintInterface
{
  constructor(private readonly entityRepository: Repository<Entity>) {}

  async validate(value: string | number | null | undefined) {
    const values = await this.getValues();

    return values.includes(value);
  }

  private async getValues(): Promise<Array<number | string>> {
    const entities = await this.entityRepository.find({
      select: ['id'],
    });

    return entities.map((entity) => entity.id);
  }
}
