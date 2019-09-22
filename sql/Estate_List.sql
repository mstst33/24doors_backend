CREATE TABLE public."Estate_List"
(
    estate_list_id bigint NOT NULL,
    estate_id bigint[],
    agent_id character varying,
    client_id character varying,
    confirmation boolean,
    PRIMARY KEY (estate_list_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."Estate_List"
    OWNER to postgres;