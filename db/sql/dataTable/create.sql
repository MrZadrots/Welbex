/*
    Creates table Users.
*/
CREATE TABLE dataTable (
    id serial PRIMARY KEY,
    date date NOT NULL,
    name text NOT NULL,
    count int NOT NULL,
    distance int NOT NULL
)