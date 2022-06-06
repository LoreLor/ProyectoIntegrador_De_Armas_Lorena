package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.Proyectos;
import com.portfolio.crud.repositorios.ProyectosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectosServiceImp implements ProyectosService {
    @Autowired
    private ProyectosRepository proyectoRepo;

    @Override
    public List<Proyectos>mostrarProyectos(){
        return proyectoRepo.findAll();
    }

    @Override
    public Proyectos mostrarProyectosId(Long id) {
        return proyectoRepo.findById(id);
    }
    
    @Override
    public Proyectos agregarProyectos(Proyectos proyectos) {
        return proyectoRepo.save(proyectos);
    }

    @Override
    public Proyectos editarProyectos(Proyectos proyectos) {
        return proyectoRepo.save(proyectos);
    }

    @Override
    public Proyectos eliminarProyectos(Long id) {
        Proyectos proyectos = proyectoRepo.findById(id);
        if(proyectos != null){
            return proyectoRepo.delete(proyectos);
        }
        return proyectos;
    }

    
}
