package com.portfolio.crud.modelos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="experiencia")
public class Experiencia {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name = "nombreTrabajo", length = 60, nullable = false)
    private String nombreTrabajo;

    @Column(name = "anios", length = 60, nullable = false)
    private String anios;

    @Column(name = "descripcion", length = 60, nullable = false)
    private String descripcion;



    public Experiencia() {}


    public Experiencia(Long id, String nombreTrabajo, String anios, String descripcion) {
        this.id = id;
        this.nombreTrabajo = nombreTrabajo;
        this.anios = anios;
        this.descripcion = descripcion;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreTrabajo() {
        return this.nombreTrabajo;
    }

    public void setNombreTrabajo(String nombreTrabajo) {
        this.nombreTrabajo = nombreTrabajo;
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
