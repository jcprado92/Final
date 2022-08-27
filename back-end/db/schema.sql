DROP DATABASE IF EXISTS pics_dev;
CREATE DATABASE pics_dev;

\c pics_dev;

CREATE TABLE pics (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    is_favorite BOOLEAN
);