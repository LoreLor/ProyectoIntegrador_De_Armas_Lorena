package com.portfolio.crud.modelos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name="educacion")
public class Educacion {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombre", length = 60, nullable = false)
    private String nombre;
    
    @Column(name = "anios", length = 60, nullable = false)
    private String anios;
    
    @Column(name = "descripcion", length = 60, nullable = false)
    private String descripcion;

    
/* CONSTRUCTORES */   
    public Educacion() {}

    public Educacion(Long id, String nombre, String anios, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.anios = anios;
        this.descripcion = descripcion;
    }


/* GETTERS AND SETTERS */
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getAnios() {
        return this.anios;
    }

    public void setAnios(String anios) {
        this.anios = anios;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
