/*
    Inserts a new User record.
*/
INSERT INTO dataTable(name)
VALUES($1)
RETURNING *
