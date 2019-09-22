CREATE TABLE public."Estate"
(
    estate_id bigint NOT NULL,
    estate_type smallint,
    suggested_price money,
    purchased_price money,
    purchased_date date,
    house_type smallint,
    rooms smallint,
    description text,
    seller_id character varying NOT NULL,
    PRIMARY KEY (estate_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."Estate"
    OWNER to postgres;