import { Entity, PrimaryColumn } from 'typeorm';

@Entity('countries')
export class Country {
  @PrimaryColumn({ type: 'varchar', length: 2 })
  id: string;
}
