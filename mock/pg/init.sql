\c robinhood-dev

-- Clean all data in tables
TRUNCATE TABLE "user" CASCADE;
TRUNCATE TABLE "booking" CASCADE;
TRUNCATE TABLE "booking_comment" CASCADE;

-- Reset auto increment
ALTER SEQUENCE "booking_id_seq" RESTART WITH 1;
ALTER SEQUENCE "booking_comment_id_seq" RESTART WITH 1;

-- Create users
insert into "user" (id, email, username)
values ('3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'user1@robinhood.co.th', 'โรบินฮู้ด');

-- Create bookings
insert into booking (id, title, description, user_id, booking_status, is_archived) values (1, 'Programmer II', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'In Progress', false);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (2, 'Information Systems Manager', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'To Do', true);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (3, 'Help Desk Operator', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'To Do', true);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (4, 'Professor', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'Done', false);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (5, 'Electrical Engineer', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'To Do', false);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (6, 'Analog Circuit Design manager', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'Done', true);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (7, 'Developer I', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'Done', false);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (8, 'Occupational Therapist', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'Done', true);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (9, 'Geological Engineer', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'In Progress', true);
insert into booking (id, title, description, user_id, booking_status, is_archived) values (10, 'Geological Engineer', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 'Done', true);

-- Create booking comments
insert into booking_comment (id, comment, user_id, booking_id) values (1, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (2, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (3, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 4);
insert into booking_comment (id, comment, user_id, booking_id) values (4, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 7);
insert into booking_comment (id, comment, user_id, booking_id) values (5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 4);
insert into booking_comment (id, comment, user_id, booking_id) values (6, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (7, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (8, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (9, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (10, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 4);
insert into booking_comment (id, comment, user_id, booking_id) values (11, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 4);
insert into booking_comment (id, comment, user_id, booking_id) values (12, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 1);
insert into booking_comment (id, comment, user_id, booking_id) values (13, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 6);
insert into booking_comment (id, comment, user_id, booking_id) values (14, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (15, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 9);
insert into booking_comment (id, comment, user_id, booking_id) values (16, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 9);
insert into booking_comment (id, comment, user_id, booking_id) values (17, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 4);
insert into booking_comment (id, comment, user_id, booking_id) values (18, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 2);
insert into booking_comment (id, comment, user_id, booking_id) values (19, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (20, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 8);
insert into booking_comment (id, comment, user_id, booking_id) values (21, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 9);
insert into booking_comment (id, comment, user_id, booking_id) values (22, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 2);
insert into booking_comment (id, comment, user_id, booking_id) values (23, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (24, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 3);
insert into booking_comment (id, comment, user_id, booking_id) values (25, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 9);
insert into booking_comment (id, comment, user_id, booking_id) values (26, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 3);
insert into booking_comment (id, comment, user_id, booking_id) values (27, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 1);
insert into booking_comment (id, comment, user_id, booking_id) values (28, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 1);
insert into booking_comment (id, comment, user_id, booking_id) values (29, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (30, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 6);
insert into booking_comment (id, comment, user_id, booking_id) values (31, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (32, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 3);
insert into booking_comment (id, comment, user_id, booking_id) values (33, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 2);
insert into booking_comment (id, comment, user_id, booking_id) values (34, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 2);
insert into booking_comment (id, comment, user_id, booking_id) values (35, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 3);
insert into booking_comment (id, comment, user_id, booking_id) values (36, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (37, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 8);
insert into booking_comment (id, comment, user_id, booking_id) values (38, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 1);
insert into booking_comment (id, comment, user_id, booking_id) values (39, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 8);
insert into booking_comment (id, comment, user_id, booking_id) values (40, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 7);
insert into booking_comment (id, comment, user_id, booking_id) values (41, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 2);
insert into booking_comment (id, comment, user_id, booking_id) values (42, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 6);
insert into booking_comment (id, comment, user_id, booking_id) values (43, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 9);
insert into booking_comment (id, comment, user_id, booking_id) values (44, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 9);
insert into booking_comment (id, comment, user_id, booking_id) values (45, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 7);
insert into booking_comment (id, comment, user_id, booking_id) values (46, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 10);
insert into booking_comment (id, comment, user_id, booking_id) values (47, 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 8);
insert into booking_comment (id, comment, user_id, booking_id) values (48, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 5);
insert into booking_comment (id, comment, user_id, booking_id) values (49, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 3);
insert into booking_comment (id, comment, user_id, booking_id) values (50, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '3b3c2b9e-0b7b-4b1c-8c0a-0e1b0b0b0b0b', 3);
