import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBookingAndBookingComment1695475912489 implements MigrationInterface {
  name = 'AddBookingAndBookingComment1695475912489';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
    await queryRunner.query(
      `CREATE TYPE "public"."booking_booking_status_enum" AS ENUM('To Do', 'In Progress', 'Done')`,
    );
    await queryRunner.query(
      `CREATE TABLE "booking" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "user_id" character varying NOT NULL, "booking_status" "public"."booking_booking_status_enum" NOT NULL DEFAULT 'To Do', "is_archived" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6cc564b7fa7d4a0dc7af2a8b2f" ON "booking" ("booking_status") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_8439adac326cb5d728ba1bedd9" ON "booking" ("is_archived") `,
    );
    await queryRunner.query(
      `CREATE TABLE "booking_comment" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id" SERIAL NOT NULL, "comment" character varying NOT NULL, "user_id" character varying NOT NULL, "booking_id" integer NOT NULL, CONSTRAINT "PK_11053df733add1339759d38963b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_comment" ADD CONSTRAINT "FK_019fbd4e6e281b547c88620134a" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_comment" ADD CONSTRAINT "FK_71337677b66700615376722d14f" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "booking_comment" DROP CONSTRAINT "FK_71337677b66700615376722d14f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking_comment" DROP CONSTRAINT "FK_019fbd4e6e281b547c88620134a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`,
    );
    await queryRunner.query(`DROP TABLE "booking_comment"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_8439adac326cb5d728ba1bedd9"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_6cc564b7fa7d4a0dc7af2a8b2f"`);
    await queryRunner.query(`DROP TABLE "booking"`);
    await queryRunner.query(`DROP TYPE "public"."booking_booking_status_enum"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
