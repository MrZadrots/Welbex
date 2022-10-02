INSERT INTO dataTable(date,name,count,distance) 
VALUES ($1,$2,$3,$4)
RETURNING * 