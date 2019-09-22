CREATE TABLE public."User_Calender"
(
    calender_id bigint NOT NULL,
    user_id character varying NOT NULL,
    c_date date NOT NULL,
    available_from date,
    available_to date,
    description text,
    PRIMARY KEY (calender_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."User_Calender"
    OWNER to postgres;