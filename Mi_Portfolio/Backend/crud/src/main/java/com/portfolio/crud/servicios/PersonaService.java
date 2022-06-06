package com.portfolio.crud.servicios;


import java.util.List;
import com.portfolio.crud.modelos.Persona;


public interface PersonaService {
    List<Persona>mostrarPersona();
    Persona mostrarPersonaId(Long id);
    Persona agregarPersona(Persona persona);
    Persona editarPersona(Persona persona);
    Persona eliminarPersona(Long id);    
}
