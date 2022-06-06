package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.Proyectos;

public interface ProyectosService {
    List<Proyectos>mostrarProyectos();
    Proyectos mostrarProyectosId(Long id);
    Proyectos agregarProyectos(Proyectos proyectos);
    Proyectos editarProyectos(Proyectos proyectos);
    Proyectos eliminarProyectos(Long id);
    
}
