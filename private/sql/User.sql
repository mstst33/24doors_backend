CREATE TABLE public."User"
(
    user_id character varying NOT NULL,
    password character(64) NOT NULL,
    "e-mail" character varying,
    phone_number character(32),
    region bigint,
    name name,
    login boolean NOT NULL,
    user_interest json[],
    PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."User"
    OWNER to postgres;