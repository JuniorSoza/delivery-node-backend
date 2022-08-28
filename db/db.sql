create table users(
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name varchar(255) not null,
    lastname varchar(255)not null,
    phone varchar(10) not null unique,
    image varchar(255) null,
    password varchar(255)not null,
    is_available boolean null,
    session_token varchar(255)not null,
    create_at timestamp(0) not null,
    update_at timestamp(0) not null
);