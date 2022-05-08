package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.Educacion;

public interface EducacionService {
    List<Educacion>mostrarEducacion();
    Educacion mostrarEducacionId(Long id);
    Educacion agregarEducacion(Educacion educacion);
    Educacion editarEducacion(Educacion educacion);
    Educacion eliminarEducacion(Long id);    
}
