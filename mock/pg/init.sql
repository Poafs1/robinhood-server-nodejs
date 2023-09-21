\c robinhood-dev

-- Clean all data in tables
TRUNCATE TABLE "user" CASCADE;
TRUNCATE TABLE "booking" CASCADE;

-- Reset auto increment
ALTER SEQUENCE "booking_id_seq" RESTART WITH 1;

-- Create users
insert into "user" (id, email, username)
values ('3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'user1@robinhood.co.th', 'โรบินฮู้ด');