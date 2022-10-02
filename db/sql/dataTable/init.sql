/*
    Inserting a few demo users into the database, and returning their id-s;

    NOTES:

    - You can do multiple separate inserts, if you want, but using
      a single concatenated insert is significantly faster.

    See also:
    https://github.com/vitaly-t/pg-promise/wiki/Performance-Boost
*/
INSERT INTO dataTable(date,name,count,distance) VALUES
('2012-01-02', 'first',20,10),
('2012-01-03', 'second',22,15),
('2012-01-04', 'third',24,12)