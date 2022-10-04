/*
    Inserts a new data record.
*/
INSERT INTO dataTable(name)
VALUES($1)
RETURNING *
