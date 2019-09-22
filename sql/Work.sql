CREATE TABLE public."Work"
(
    work_id bigint NOT NULL,
    worker_id character varying NOT NULL,
    observer_id character varying NOT NULL,
    estate_id bigint NOT NULL,
    permission_code character(64) NOT NULL,
    start_time date NOT NULL,
    end_time date,
    work_time date NOT NULL,
    work_state smallint NOT NULL,
    PRIMARY KEY (work_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public."Work"
    OWNER to postgres;