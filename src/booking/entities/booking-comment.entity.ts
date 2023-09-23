import { UserEntity } from '../../user/entities/user.entity';
import { BaseAuditableEntity } from '../../sql/entities/baseAuditable.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';

@Entity({ name: 'booking_comment' })
export class BookingCommentEntity extends BaseAuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column()
  user_id: string;

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column()
  booking_id: number;

  @ManyToOne(() => BookingEntity, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'booking_id' })
  booking: BookingEntity;
}
