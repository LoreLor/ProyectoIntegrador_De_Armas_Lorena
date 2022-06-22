package com.portfolio.crud.modelos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hardskills")
public class HardSkills {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column
    private Long id;
    
    @Column(name = "title", length = 60, nullable = false)
    private String title;

    @Column(name = "percent", length = 60, nullable = false)
    private Integer percent;


    public HardSkills() {}

    public HardSkills(Long id, String title, Integer percent) {
        this.id = id;
        this.title = title;
        this.percent = percent;
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

    public Integer getPercent() {
        return this.percent;
    }

    public void setPercent(Integer percent) {
        this.percent = percent;
    } 
}
