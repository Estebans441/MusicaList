-- Inserts para 5 géneros musicales
INSERT INTO musicalist.genero_musical (nombre_genero, descripcion)
VALUES ('Pop', 'Género musical pop'),
       ('Rock', 'Género musical de rock'),
       ('Electrónica', 'Música electrónica'),
       ('Hip Hop', 'Música de hip hop'),
       ('R&B', 'Rhythm and blues');

-- Inserts para 10 canciones por género (asumiendo que ya tienes IDs generados)
-- Aquí los administrador_id son 1

-- Género: Pop
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, genero_musical_id)
VALUES ('Shape of You', 'Ed Sheeran', 233, 1),
       ('Blinding Lights', 'The Weeknd', 200, 1),
       ('Havana', 'Camila Cabello', 215, 1),
       ('Uptown Funk', 'Mark Ronson ft. Bruno Mars', 270, 1),
       ('Someone Like You', 'Adele', 285, 1),
       ('Bad Guy', 'Billie Eilish', 194, 1),
       ('Despacito', 'Luis Fonsi ft. Daddy Yankee', 228, 1),
       ('Stay With Me', 'Sam Smith', 172, 1),
       ('Happy', 'Pharrell Williams', 233, 1),
       ('Rolling in the Deep', 'Adele', 228, 1);

-- Género: Rock
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, genero_musical_id)
VALUES ('Bohemian Rhapsody', 'Queen', 355, 2),
       ('Hotel California', 'Eagles', 390, 2),
       ('Stairway to Heaven', 'Led Zeppelin', 482, 2),
       ('Imagine', 'John Lennon', 183, 2),
       ('Yesterday', 'The Beatles', 124, 2),
       ('Smells Like Teen Spirit', 'Nirvana', 301, 2),
       ('Sweet Child O Mine', 'Guns N Roses', 355, 2),
       ('Livin on a Prayer', 'Bon Jovi', 247, 2),
       ('Wonderwall', 'Oasis', 258, 2),
       ('Hey Jude', 'The Beatles', 431, 2);

-- Género: Electrónica
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, genero_musical_id)
VALUES ('Wake Me Up', 'Avicii', 247, 3),
       ('Lean On', 'Major Lazer', 177, 3),
       ('Clarity', 'Zedd', 260, 3),
       ('Titanium', 'David Guetta ft. Sia', 245, 3),
       ('Animals', 'Martin Garrix', 316, 3),
       ('Faded', 'Alan Walker', 212, 3),
       ('On The Floor', 'Jennifer Lopez ft. Pitbull', 251, 3),
       ('Sick Individuals', 'Axwell', 189, 3),
       ('Turn Down for What', 'DJ Snake ft. Lil Jon', 214, 3),
       ('Reload', 'Sebastian Ingrosso, Tommy Trash, John Martin', 250, 3);

-- Género: Hip Hop
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, genero_musical_id)
VALUES ('Sicko Mode', 'Travis Scott', 312, 4),
       ('Gods Plan', 'Drake', 200, 4),
       ('Old Town Road', 'Lil Nas X', 157, 4),
       ('ROXANNE', 'Arizona Zervas', 163, 4),
       ('SUNFLOWER', 'Post Malone & Swae Lee', 158, 4),
       ('HUMBLE.', 'Kendrick Lamar', 177, 4),
       ('Lucid Dreams', 'Juice WRLD', 239, 4),
       ('Sicko Mode', 'Travis Scott', 312, 4),
       ('Truth Hurts', 'Lizzo', 173, 4),
       ('Circles', 'Post Malone', 215, 4);

-- Género: R&B
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, genero_musical_id)
VALUES ('Blinding Lights', 'The Weeknd', 200, 5),
       ('Say So', 'Doja Cat', 237, 5),
       ('Watermelon Sugar', 'Harry Styles', 174, 5),
       ('Sick and Tired', 'Lizzo', 168, 5),
       ('Good 4 U', 'Olivia Rodrigo', 178, 5),
       ('Levitating', 'Dua Lipa', 203, 5),
       ('Montero (Call Me By Your Name)', 'Lil Nas X', 137, 5),
       ('Best Part', 'Daniel Caesar ft. H.E.R.', 219, 5),
       ('Peaches', 'Justin Bieber ft. Daniel Caesar', 198, 5),
       ('Pony', 'Ginuwine', 319, 5);

INSERT INTO musicalist.peticion_contacto(nombre_usuario, correo, edad, asunto, mensaje)
VALUES ('Juan Francisco Ramírez', 'juanframireze@gmail.com', 19, 'Saludo', 'Hola, mi nombre es Juan Francisco y tengo una duda'),
       ('Esteban Salazar Arbelaez', 'estebans441@gmail.com', 20, 'Peticion', 'Hola mi nombre es Esteban Salazar y tengo una petición'),
       ('Javier Alejandro Moyano Cipamocha', 'moyano1711@gmail.com', 19, 'Queja', 'Hola mi nombre es Javier Moyano y tengo una queja'),
       ('Cristiano Ronaldo', 'cr7_goat@gmail.com', 38, 'Saludo', 'Hola, afición, esto es para vosotros, SIIIU');
