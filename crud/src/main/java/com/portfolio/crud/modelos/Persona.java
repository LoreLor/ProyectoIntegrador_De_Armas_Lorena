package com.portfolio.crud.modelos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="persona")
public class Persona {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", length = 60, nullable = false)
    private Long id;

    @Column(name = "nombres", length = 60, nullable = false)
    private String nombres;

    @Column(name = "apellidos", length = 60, nullable = false)
    private String apellidos;

    @Column(name = "imagenPerfil", nullable = false)
    private String imagenPerfil;

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "descripcion", length = 60, nullable = false)
    private String descripcion;


/* CONSTRUCTOR */
    public Persona() {}

    public Persona(Long id, String nombres, String apellidos, String email, String imagenPerfil, String titulo, String descripcion) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.imagenPerfil = imagenPerfil;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

/* SETTERS AND GETTERS */
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombres() {
        return this.nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return this.apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getImagenPerfil() {
        return this.imagenPerfil;
    }

    public void setImagenPerfil(String imagenPerfil) {
        this.imagenPerfil = imagenPerfil;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}
