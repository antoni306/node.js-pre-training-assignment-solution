/*already had pgadmin
 used gui of pgadmin to create database
 i had troubles with constraints and foreign keys
 */

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
create table todos(
id SERIAL PRIMARY KEY,
title TEXT NOT NULL CHECK (title <> ''),
description TEXT,
status TEXT NOT NULL DEFAULT 'active',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
user_id INT,
CONSTRAINT fk_todos_user FOREIGN KEY (user_id)
REFERENCES users(id) ON DELETE CASCADE
);