-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Schema musicalist
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS musicalist;
CREATE SCHEMA IF NOT EXISTS musicalist DEFAULT CHARACTER SET utf8 ;
DROP USER IF EXISTS 'musicalist_SU'@'%';
flush privileges;
CREATE USER 'musicalist_SU'@'%' IDENTIFIED BY 'LosGalacticos7';
GRANT INSERT, UPDATE, DELETE, SELECT ON `musicalist`.* TO 'musicalist_SU'@'%';

USE musicalist ;

-- -----------------------------------------------------
-- Table musicalist.cuenta
-- -----------------------------------------------------
DROP TABLE IF EXISTS musicalist.cuenta ;

CREATE TABLE IF NOT EXISTS musicalist.cuenta (
  id_cuenta INT NOT NULL AUTO_INCREMENT,
  nombre_usuario VARCHAR(45) NOT NULL,
  correo VARCHAR(45) NOT NULL,
  contrasena VARCHAR(64) NOT NULL,
  activada TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (id_cuenta),
  UNIQUE INDEX nombre_usuario_UNIQUE (nombre_usuario ASC) VISIBLE,
  UNIQUE INDEX correo_UNIQUE (correo ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table musicalist.administrador
-- -----------------------------------------------------
DROP TABLE IF EXISTS musicalist.administrador ;

CREATE TABLE IF NOT EXISTS musicalist.administrador (
  cuenta_id INT NOT NULL,
  PRIMARY KEY (cuenta_id),
  CONSTRAINT fk_administrador_cuenta
    FOREIGN KEY (cuenta_id)
    REFERENCES musicalist.cuenta (id_cuenta)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table musicalist.votante
-- -----------------------------------------------------
DROP TABLE IF EXISTS musicalist.votante ;

CREATE TABLE IF NOT EXISTS musicalist.votante (
  cuenta_id INT NOT NULL,
  PRIMARY KEY (cuenta_id),
  CONSTRAINT fk_votante_cuenta1
    FOREIGN KEY (cuenta_id)
    REFERENCES musicalist.cuenta (id_cuenta)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table musicalist.genero_musical
-- -----------------------------------------------------
DROP TABLE IF EXISTS musicalist.genero_musical ;

CREATE TABLE IF NOT EXISTS musicalist.genero_musical (
  id_genero INT NOT NULL AUTO_INCREMENT,
  nombre_genero VARCHAR(45) NOT NULL,
  descripcion VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_genero),
  UNIQUE INDEX nombre_genero_UNIQUE (nombre_genero ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table musicalist.cancion
-- -----------------------------------------------------
DROP TABLE IF EXISTS musicalist.cancion ;

CREATE TABLE IF NOT EXISTS musicalist.cancion (
  id_cancion INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  artista VARCHAR(45) NULL,
  duracion_seg INT NULL,
  genero_musical_id INT NOT NULL,
  PRIMARY KEY (id_cancion),
  INDEX fk_cancion_genero_musical1_idx (genero_musical_id ASC) VISIBLE,
  CONSTRAINT fk_cancion_genero_musical1
    FOREIGN KEY (genero_musical_id)
    REFERENCES musicalist.genero_musical (id_genero)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table musicalist.votos_cancion
-- -----------------------------------------------------
DROP TABLE IF EXISTS musicalist.votos_cancion ;

CREATE TABLE IF NOT EXISTS musicalist.votos_cancion (
  votante_cuenta_id INT NOT NULL,
  cancion_id_cancion INT NOT NULL,
  PRIMARY KEY (votante_cuenta_id, cancion_id_cancion),
  INDEX fk_votos_cancion_cancion1_idx (cancion_id_cancion ASC) VISIBLE,
  CONSTRAINT fk_votos_cancion_votante1
    FOREIGN KEY (votante_cuenta_id)
    REFERENCES musicalist.votante (cuenta_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_votos_cancion_cancion1
    FOREIGN KEY (cancion_id_cancion)
    REFERENCES musicalist.cancion (id_cancion)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;