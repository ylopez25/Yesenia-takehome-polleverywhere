## Getting started 

## Steps to run:
- cd to backend
- Npm I
- Create .env file in the top level  of backend=> touch .env
### Paste :

``` PORT = 3003
PG_HOST = localhost
PG_PORT = 5432
PG_DATABASE= raffles_dev
PG_USER=postgres ```

THEN RUN commands:
- Npm run db_init
- Npm run db_seed
- Npm start for nodemon 
