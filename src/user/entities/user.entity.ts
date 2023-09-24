import { BaseAuditableEntity } from '../../sql/entities/baseAuditable.entity';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({ name: 'user' })
export class UserEntity extends BaseAuditableEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  @Index()
  email: string;

  // TODO: add password

  @Column()
  username: string;

  constructor() {
    super();
    this.id = uuid();
  }
}
