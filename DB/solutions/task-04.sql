ALTER TABLE users RENAME COLUMN username TO name;
ALTER TABLE users ADD COLUMN email TEXT;
ALTER TABLE users ALTER COLUMN name SET NOT NULL;
ALTER TABLE users ADD CONSTRAINT users_email_unique UNIQUE (email);
ALTER TABLE users ADD CONSTRAINT users_email_not_empty CHECK (length(trim(email)) > 0);
ALTER TABLE users ADD CONSTRAINT users_name_not_empty CHECK (length(trim(name)) > 0);

-- i did it another way (in first task i created table users in order to add have foreign key for todos)