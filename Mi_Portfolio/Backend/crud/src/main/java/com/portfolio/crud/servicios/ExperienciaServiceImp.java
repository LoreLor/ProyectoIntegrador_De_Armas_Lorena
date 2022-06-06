package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.Experiencia;
import com.portfolio.crud.repositorios.ExperienciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ExperienciaServiceImp implements ExperienciaService {
    @Autowired
    private ExperienciaRepository experienciaRepo;

    @Override
    public List<Experiencia>mostrarExperiencia() {
        return experienciaRepo.findAll();
    }

    @Override
    public Experiencia mostrarExperienciaId(Long id) {
        return experienciaRepo.findById(id);
    }

    @Override
    public Experiencia agregarExperiencia(Experiencia experiencia) {
        return experienciaRepo.save(experiencia);
    }

    @Override
    public Experiencia editarExperiencia(Experiencia experiencia) {
        return experienciaRepo.save(experiencia);
    }

    @Override
    public Experiencia eliminarExperiencia(Long id) {
        Experiencia experiencia=experienciaRepo.findById(id);
        if(experiencia != null){
            return experienciaRepo.delete(experiencia);
        }
        return experiencia;
    }
}
