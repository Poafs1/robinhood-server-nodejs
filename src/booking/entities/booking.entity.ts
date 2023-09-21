import { BaseAuditableEntity } from '../../sql/entities/baseAuditable.entity';
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookingStatusEnum } from '../enums/bookingStatus.enum';
import { UserEntity } from 'src/user/entities/user.entity';

@Entity({ name: 'booking' })
export class BookingEntity extends BaseAuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToOne(() => UserEntity, (user) => user.id, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({
    type: 'enum',
    enum: BookingStatusEnum,
    default: BookingStatusEnum.TODO,
  })
  booking_status: BookingStatusEnum;

  @Column({
    type: 'boolean',
    default: false,
  })
  @Index()
  is_archived: boolean;
}
