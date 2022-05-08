package com.portfolio.crud.modelos;



import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="proyectos")
public class Proyectos {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name = "nombre", length = 60, nullable = false)
    private String nombre;

    @Column(name = "stack", length = 60, nullable = false)
    private String stack;

    @Column(name = "descripcion", length = 100, nullable = false)
    private String descripcion;

    @Column(name = "imagenProyecto", nullable = false)
    private String imagenProyecto;

/* RELACIONES */ 
    // @ManyToMany(cascade = CascadeType.PERSIST, fetch=FetchType.LAZY)
    // @JoinTable(
    //     name="persona_proyectos",
    //     joinColumns = @JoinColumn(name="proyectos_idproyectos", referencedColumnName = "proyectos_proyectos"),
    //     inverseJoinColumns = @JoinColumn(name = "persona_idpersona", referencedColumnName = "persona_idpersona")
    // )
    // private Set<Persona> persona = new HashSet<>();



    public Proyectos() {}


    public Proyectos(Long id, String nombre, String stack, String descripcion, String imagenProyecto) {
        this.id = id;
        this.nombre = nombre;
        this.stack = stack;
        this.descripcion = descripcion;
        this.imagenProyecto = imagenProyecto;
    }


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

    public String getStack() {
        return this.stack;
    }

    public void setStack(String stack) {
        this.stack = stack;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagenProyecto() {
        return this.imagenProyecto;
    }

    public void setImagenProyecto(String imagenProyecto) {
        this.imagenProyecto = imagenProyecto;
    } 
}
