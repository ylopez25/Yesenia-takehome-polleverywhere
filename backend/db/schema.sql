DROP DATABASE IF EXISTS raffles_dev;

CREATE DATABASE raffles_dev;

--connecting to the database
\c raffles_dev;

--raffles table
DROP TABLE IF EXISTS raffles;
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

DROP TABLE IF EXISTS participants;

CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    phone NUMERIC,
    raffle_id INTEGER REFERENCES raffles (id) ON DELETE CASCADE
)