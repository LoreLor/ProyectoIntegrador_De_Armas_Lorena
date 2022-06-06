package com.portfolio.crud.servicios;

import java.util.List;
import com.portfolio.crud.modelos.Educacion;
import com.portfolio.crud.repositorios.EducacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EducacionServiceImp implements EducacionService{
    @Autowired
    private EducacionRepository educacionRepo;

    @Override
    public List<Educacion>mostrarEducacion(){
        return educacionRepo.findAll();
    }

    @Override
    public Educacion mostrarEducacionId(Long id){
        return educacionRepo.findById(id);
    }

    @Override
    public Educacion agregarEducacion(Educacion educacion){
        return educacionRepo.save(educacion);
    }

    @Override
    public Educacion editarEducacion(Educacion educacion) {
        return educacionRepo.save(educacion);
    }

    @Override
    public Educacion eliminarEducacion(Long id) {
        Educacion educacion=educacionRepo.findById(id);
        if(educacion != null){
            return educacionRepo.delete(educacion);
        }
        return educacion;
    }
}
