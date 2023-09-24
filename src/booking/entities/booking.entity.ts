import { BaseAuditableEntity } from '../../sql/entities/baseAuditable.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookingStatusEnum } from '../enums/bookingStatus.enum';
import { UserEntity } from '../../user/entities/user.entity';
import { BookingCommentEntity } from './booking-comment.entity';

@Entity({ name: 'booking' })
export class BookingEntity extends BaseAuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @ManyToOne(() => UserEntity, {
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
  @Index()
  booking_status: BookingStatusEnum;

  @Column({
    type: 'boolean',
    default: false,
  })
  @Index()
  is_archived: boolean;

  @OneToMany(() => BookingCommentEntity, (bookingComment) => bookingComment.booking)
  booking_comments: BookingCommentEntity[];
}
