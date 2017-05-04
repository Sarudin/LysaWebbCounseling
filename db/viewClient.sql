SELECT * from "Clients"
JOIN "ClientInfo" on "Clients"."id" = "ClientInfo"."client_id_FK"
WHERE "Clients"."firstName" LIKE $1 AND "Clients"."lastName" LIKE $2;
