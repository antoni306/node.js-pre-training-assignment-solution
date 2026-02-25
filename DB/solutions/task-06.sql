CREATE INDEX IF NOT EXISTS idx_todos_status
ON todos (status);


EXPLAIN ANALYZE
SELECT *
FROM todos
WHERE status = 'completed';
/*
Created an index on the status column in the todos table to improve filtering performance.
Used EXPLAIN ANALYZE to check the query execution plan and confirm that the index was used. 
*/