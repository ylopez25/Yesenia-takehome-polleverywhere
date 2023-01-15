DROP DATABASE IF EXISTS raffles_dev;

CREATE DATABASE raffles_dev;

--connecting to the database
\c raffles_dev;

--raffles table
CREATE TABLE raffles(
    id SERIAL PRIMARY KEY,
    rafflename TEXT,
   -- firstname TEXT,
   -- lastname TEXT,
    dates TEXT NOT NULL,
   -- email TEXT,
    --phone numeric(10),
    is_winner BOOLEAN,
    secretcode TEXT NOT NULL
);
