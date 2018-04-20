insert into helousers1(id, username, password, img)
values($1, $2, $3, $4)
returning *