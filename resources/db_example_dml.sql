-- Inserts para 4 cuentas
INSERT INTO musicalist.cuenta (nombre_usuario, correo, contrasena, activada) VALUES
	('estebans441','estebans441@gmail.com','1b91331a76dd7440b4f6bd119a2267737ae6dd67718fc30eb2d37cc7762d7794','0'),
    ('juanframireze','juanframireze@gmail.com','dfa555dda0531c5adb758388cce2cb22cc117bc1940db11f45f09183772c65bc','0'),
    ('moyano1711','moyano1711@gmail.com','72b24f3928519a6f4e86d390ccd8cc560937e5a7db50add6465e83123af8b7de','0'),
    ('camorag','camorag@gmail.com','cfb9106ff07c952a3888917f1225dcb138cefb928f36081ed851f5f4f54d0f66','0');

-- Inserts para 2 administradores
INSERT musicalist.administrador (cuenta_id) VALUES	(1), (2);
    
-- Inserts para 2 votantes
INSERT musicalist.votante (cuenta_id) VALUES (3), (4);


-- Inserts para 5 géneros musicales
INSERT INTO musicalist.genero_musical (nombre_genero, descripcion, administrador_id) VALUES
  ('Pop', 'Género musical pop', 1),
  ('Rock', 'Género musical de rock', 1),
  ('Electrónica', 'Música electrónica', 2),
  ('Hip Hop', 'Música de hip hop', 2),
  ('R&B', 'Rhythm and blues', 2);

-- Inserts para 10 canciones por género (asumiendo que ya tienes IDs generados)
-- Aquí los administrador_id son 1

-- Género: Pop
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Shape of You', 'Ed Sheeran', 233, 1, 1),
  ('Blinding Lights', 'The Weeknd', 200, 1, 1),
  ('Havana', 'Camila Cabello', 215, 1, 1),
  ('Uptown Funk', 'Mark Ronson ft. Bruno Mars', 270, 1, 1),
  ('Someone Like You', 'Adele', 285, 1, 1),
  ('Bad Guy', 'Billie Eilish', 194, 1, 1),
  ('Despacito', 'Luis Fonsi ft. Daddy Yankee', 228, 1, 1),
  ('Stay With Me', 'Sam Smith', 172, 1, 1),
  ('Happy', 'Pharrell Williams', 233, 1, 1),
  ('Rolling in the Deep', 'Adele', 228, 1, 1);

-- Género: Rock
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Bohemian Rhapsody', 'Queen', 355, 1, 2),
  ('Hotel California', 'Eagles', 390, 1, 2),
  ('Stairway to Heaven', 'Led Zeppelin', 482, 1, 2),
  ('Imagine', 'John Lennon', 183, 1, 2),
  ('Yesterday', 'The Beatles', 124, 1, 2),
  ('Smells Like Teen Spirit', 'Nirvana', 301, 1, 2),
  ('Sweet Child O Mine', 'Guns N Roses', 355, 1, 2),
  ('Livin on a Prayer', 'Bon Jovi', 247, 1, 2),
  ('Wonderwall', 'Oasis', 258, 1, 2),
  ('Hey Jude', 'The Beatles', 431, 1, 2);

-- Género: Electrónica
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Wake Me Up', 'Avicii', 247, 2, 3),
  ('Lean On', 'Major Lazer', 177, 2, 3),
  ('Clarity', 'Zedd', 260, 2, 3),
  ('Titanium', 'David Guetta ft. Sia', 245, 2, 3),
  ('Animals', 'Martin Garrix', 316, 2, 3),
  ('Faded', 'Alan Walker', 212, 2, 3),
  ('On The Floor', 'Jennifer Lopez ft. Pitbull', 251, 2, 3),
  ('Sick Individuals', 'Axwell', 189, 2, 3),
  ('Turn Down for What', 'DJ Snake ft. Lil Jon', 214, 2, 3),
  ('Reload', 'Sebastian Ingrosso, Tommy Trash, John Martin', 250, 2, 3);

-- Género: Hip Hop
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Sicko Mode', 'Travis Scott', 312, 2, 4),
  ('Gods Plan', 'Drake', 200, 2, 4),
  ('Old Town Road', 'Lil Nas X', 157, 2, 4),
  ('ROXANNE', 'Arizona Zervas', 163, 2, 4),
  ('SUNFLOWER', 'Post Malone & Swae Lee', 158, 2, 4),
  ('HUMBLE.', 'Kendrick Lamar', 177, 2, 4),
  ('Lucid Dreams', 'Juice WRLD', 239, 2, 4),
  ('Sicko Mode', 'Travis Scott', 312, 2, 4),
  ('Truth Hurts', 'Lizzo', 173, 2, 4),
  ('Circles', 'Post Malone', 215, 2, 4);

-- Género: R&B
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Blinding Lights', 'The Weeknd', 200, 2, 5),
  ('Say So', 'Doja Cat', 237, 2, 5),
  ('Watermelon Sugar', 'Harry Styles', 174, 2, 5),
  ('Sick and Tired', 'Lizzo', 168, 2, 5),
  ('Good 4 U', 'Olivia Rodrigo', 178, 2, 5),
  ('Levitating', 'Dua Lipa', 203, 2, 5),
  ('Montero (Call Me By Your Name)', 'Lil Nas X', 137, 2, 5),
  ('Best Part', 'Daniel Caesar ft. H.E.R.', 219, 2, 5),
  ('Peaches', 'Justin Bieber ft. Daniel Caesar', 198, 2, 5),
  ('Pony', 'Ginuwine', 319, 2, 5);