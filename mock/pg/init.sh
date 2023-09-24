# Create dir inside container
docker exec -d robinhood-postgres-db mkdir mockData

docker cp mock/pg/init.sql robinhood-postgres-db:mockData/init.sql

docker exec -d robinhood-postgres-db psql -U postgres -f ./mockData/init.sql
