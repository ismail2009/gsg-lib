BEGIN;
DROP TABLE IF EXISTS books CASCADE;
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  edition VARCHAR(50)
);
INSERT INTO books (title,author,edition)
VALUES ('heart of darknes', 'Yasmin','first edition');
COMMIT;
