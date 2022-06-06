package com.portfolio.crud.repositorios;


import java.util.List;

import com.portfolio.crud.modelos.Educacion;
import org.springframework.data.repository.Repository;



public interface EducacionRepository extends Repository<Educacion, Long> {
    List<Educacion>findAll();
    Educacion findById(Long id);
    Educacion save(Educacion persona);
    Educacion delete(Educacion persona);
 
}
