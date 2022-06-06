package com.portfolio.crud.modelos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="softskills")
public class SoftSkills {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name = "title", length = 60, nullable = false)
    private String title;

    @Column(name = "descripcion", length = 255, nullable = false)
    private Integer descripcion;


    public SoftSkills() {}


    public SoftSkills(Long id, String title, Integer descripcion) {
        this.id = id;
        this.title = title;
        this.descripcion = descripcion;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(Integer descripcion) {
        this.descripcion = descripcion;
    }
}
