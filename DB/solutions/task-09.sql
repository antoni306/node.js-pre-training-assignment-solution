CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    todo_id INTEGER NOT NULL,
    action TEXT NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE OR REPLACE FUNCTION log_todo_changes()
RETURNS TRIGGER AS $$
BEGIN

    IF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (todo_id, action)
        VALUES (NEW.id, 'UPDATE');

        RETURN NEW;
    END IF;

    IF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (todo_id, action)
        VALUES (OLD.id, 'DELETE');

        RETURN OLD;
    END IF;

END;
$$ LANGUAGE plpgsql;



CREATE TRIGGER todos_update_audit
AFTER UPDATE ON "Todos"
FOR EACH ROW
EXECUTE FUNCTION log_todo_changes();

CREATE TRIGGER todos_delete_audit
AFTER DELETE ON "Todos"
FOR EACH ROW
EXECUTE FUNCTION log_todo_changes();

update "Todos" set status = 'completed' where id = 26;
select * from audit_log;
