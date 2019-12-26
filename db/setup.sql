DROP DATABASE IF EXISTS myweather_app;

CREATE DATABASE myweather_app;

\c myweather_app;

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(50) NOT NULL,
  img_url VARCHAR(2083) NOT NULL,
  joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "users"
  (username, firstName, lastName, email, password, img_url)
VALUES
  ('jessJelly', 'jessica', 'evans', 'jess_evans123@gmail.com', 'myPassword@123', 'https:
//i.pinimg.com/originals/0b/11/59/0b1159a00d745ddacc8da192f68fed5a.gif');


SELECT *
FROM "users";