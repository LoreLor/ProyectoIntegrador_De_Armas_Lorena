package com.portfolio.crud.repositorios;

import java.util.List;

import com.portfolio.crud.modelos.Experiencia;
import org.springframework.data.repository.Repository;



public interface ExperienciaRepository extends Repository<Experiencia, Long>{
    List<Experiencia>findAll();
    Experiencia findById(Long id);
    Experiencia save(Experiencia persona);
    Experiencia delete(Experiencia persona);
 
}
