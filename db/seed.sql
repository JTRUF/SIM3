create table helousers1(id integer, username text, password text, img text)

INSERT INTO helousers1(id, username, password, img)
VALUES(1, 'username', 'password', null)

select * from helousers1

create table posts(id integer, title text, message text)

INSERT INTO posts(id, title, message)
VALUES(1, 'The Title', 'The message')

ALTER TABLE posts
ADD "date" integer

select * from posts