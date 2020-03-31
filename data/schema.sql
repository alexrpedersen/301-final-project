DROP TABLE IF EXISTS item; 
CREATE TABLE item(
    id SERIAL PRIMARY KEY,
    image_url TEXT,
    title VARCHAR(255),
    director VARCHAR(255),
    actors TEXT,
    description TEXT,
    shelf VARCHAR(255)
);