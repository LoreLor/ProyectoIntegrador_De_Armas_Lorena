package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.Experiencia;

public interface ExperienciaService {
    List<Experiencia>mostrarExperiencia();
    Experiencia mostrarExperienciaId(Long id);
    Experiencia agregarExperiencia(Experiencia experiencia);
    Experiencia editarExperiencia(Experiencia experiencia);
    Experiencia eliminarExperiencia(Long id);    
}
