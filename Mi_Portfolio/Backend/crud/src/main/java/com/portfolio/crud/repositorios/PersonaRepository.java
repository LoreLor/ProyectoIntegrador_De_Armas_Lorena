package com.portfolio.crud.repositorios;

import java.util.List;
import com.portfolio.crud.modelos.Persona;
import org.springframework.data.repository.Repository;


public interface PersonaRepository extends Repository<Persona, Long>{
    List<Persona>findAll();
    Persona findById(Long id);
    Persona save(Persona persona);
    Persona delete(Persona persona);
 
}
