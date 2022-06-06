package com.portfolio.crud.repositorios;

import java.util.List;

import com.portfolio.crud.modelos.Proyectos;
import org.springframework.data.repository.Repository;



public  interface ProyectosRepository extends Repository<Proyectos, Long>{
    List<Proyectos>findAll();
    Proyectos findById(Long id);
    Proyectos save(Proyectos persona);
    Proyectos delete(Proyectos persona);


}
