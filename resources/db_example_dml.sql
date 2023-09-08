-- Inserts para 5 géneros musicales
INSERT INTO musicalist.genero_musical (nombre_genero, descripcion, administrador_id) VALUES
  ('Pop', 'Género musical pop', 1),
  ('Rock', 'Género musical de rock', 1),
  ('Electrónica', 'Música electrónica', 1),
  ('Hip Hop', 'Música de hip hop', 1),
  ('R&B', 'Rhythm and blues', 1);

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
  ('Wake Me Up', 'Avicii', 247, 1, 3),
  ('Lean On', 'Major Lazer', 177, 1, 3),
  ('Clarity', 'Zedd', 260, 1, 3),
  ('Titanium', 'David Guetta ft. Sia', 245, 1, 3),
  ('Animals', 'Martin Garrix', 316, 1, 3),
  ('Faded', 'Alan Walker', 212, 1, 3),
  ('On The Floor', 'Jennifer Lopez ft. Pitbull', 251, 1, 3),
  ('Sick Individuals', 'Axwell', 189, 1, 3),
  ('Turn Down for What', 'DJ Snake ft. Lil Jon', 214, 1, 3),
  ('Reload', 'Sebastian Ingrosso, Tommy Trash, John Martin', 250, 1, 3);

-- Género: Hip Hop
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Sicko Mode', 'Travis Scott', 312, 1, 4),
  ('Gods Plan', 'Drake', 200, 1, 4),
  ('Old Town Road', 'Lil Nas X', 157, 1, 4),
  ('ROXANNE', 'Arizona Zervas', 163, 1, 4),
  ('SUNFLOWER', 'Post Malone & Swae Lee', 158, 1, 4),
  ('HUMBLE.', 'Kendrick Lamar', 177, 1, 4),
  ('Lucid Dreams', 'Juice WRLD', 239, 1, 4),
  ('Sicko Mode', 'Travis Scott', 312, 1, 4),
  ('Truth Hurts', 'Lizzo', 173, 1, 4),
  ('Circles', 'Post Malone', 215, 1, 4);

-- Género: R&B
INSERT INTO musicalist.cancion (nombre, artista, duracion_seg, administrador_id, genero_musical_id) VALUES
  ('Blinding Lights', 'The Weeknd', 200, 1, 5),
  ('Say So', 'Doja Cat', 237, 1, 5),
  ('Watermelon Sugar', 'Harry Styles', 174, 1, 5),
  ('Sick and Tired', 'Lizzo', 168, 1, 5),
  ('Good 4 U', 'Olivia Rodrigo', 178, 1, 5),
  ('Levitating', 'Dua Lipa', 203, 1, 5),
  ('Montero (Call Me By Your Name)', 'Lil Nas X', 137, 1, 5),
  ('Best Part', 'Daniel Caesar ft. H.E.R.', 219, 1, 5),
  ('Peaches', 'Justin Bieber ft. Daniel Caesar', 198, 1, 5),
  ('Pony', 'Ginuwine', 319, 1, 5);