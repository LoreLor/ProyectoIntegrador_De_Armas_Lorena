package com.portfolio.crud.servicios;


import java.util.List;
import com.portfolio.crud.modelos.Persona;
import com.portfolio.crud.repositorios.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class PersonaServiceImp implements PersonaService{
    @Autowired
    private PersonaRepository repositorio;

    @Override
    public List<Persona> mostrarPersona() {
        return repositorio.findAll();
    }

    @Override
    public Persona mostrarPersonaId(Long id) {
        return repositorio.findById(id);
    }

    @Override
    public Persona agregarPersona(Persona persona) {
        return repositorio.save(persona);
    }

    @Override
    public Persona editarPersona(Persona persona) {
        return repositorio.save(persona);
    }

    @Override
    public Persona eliminarPersona(Long id) {
        Persona persona=repositorio.findById(id);
        if(persona != null){
            return repositorio.delete(persona);
        }
        return persona;
    }
}
