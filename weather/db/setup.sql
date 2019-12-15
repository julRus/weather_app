DROP DATABASE IF EXISTS weather_app;

CREATE DATABASE weather_app;

\c weather_app;

CREATE TABLE users
(
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(50),
  img_url VARCHAR(2083),
  joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "users"
  (username, firstName, lastName, email, password, img_url)
VALUES
  ('jessJelly', 'jessica', 'evans', 'jess_evans123@gmail.com', 'myPassword@123', 'https:
//i.pinimg.com/originals/0b/11/59/0b1159a00d745ddacc8da192f68fed5a.gif');

SELECT *
FROM "users";