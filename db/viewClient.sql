SELECT * from "Clients"
JOIN "ClientInfo" on "Clients"."id" = "ClientInfo"."client_id_FK"
WHERE "Clients"."id" = $1;