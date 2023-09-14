package co.edu.javeriana.musicalistbackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "peticion_contacto")
@Inheritance(strategy = InheritanceType.JOINED)
public class PeticionContacto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer idPeticionContacto;

    protected String nombre;
    protected String correo;
    protected Integer edad;
    protected String asunto;
    protected String mensaje;

    public PeticionContacto(){
        this.nombre = "";
        this.correo = "";
        this.edad = 0;
        this.asunto = "";
        this.mensaje = "";
    }
    public PeticionContacto(String nombreUsuario, String correo, Integer edad, String asunto, String mensaje) {
        this.nombre = nombreUsuario;
        this.correo = correo;
        this.edad = edad;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}