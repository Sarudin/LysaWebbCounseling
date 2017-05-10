UPDATE "ClientInfo" SET "phone" = $2, "email" = $3
WHERE "client_id_FK" = $1;
