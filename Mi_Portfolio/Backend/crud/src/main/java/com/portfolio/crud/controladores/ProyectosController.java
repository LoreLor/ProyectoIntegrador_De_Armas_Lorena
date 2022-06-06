package com.portfolio.crud.controladores;

import java.util.List;

import com.portfolio.crud.modelos.Proyectos;
import com.portfolio.crud.servicios.ProyectosService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ProyectosController {
    @Autowired
    private ProyectosService service;

    @GetMapping(value = "/proyectos")
    public List<Proyectos>mostrarProyectos(){
        return service.mostrarProyectos();
    }

    @GetMapping(value = "/proyectos/{id}")
    public Proyectos mostrarProyectosId(Long id){
        return service.mostrarProyectosId(id);
    }

    @PostMapping(value="/proyectos")
    public Proyectos agregarProyectos(@RequestBody Proyectos proyectos) {
        return service.agregarProyectos(proyectos);
    }

    @PutMapping(value="proyectos/{id}")
    public Proyectos editarProyectos(@PathVariable long id, @RequestBody Proyectos proyectos) { 
        return service.agregarProyectos(proyectos);
    }

    @DeleteMapping(value = "/proyectos/{id}")
    public Proyectos eliminarProyectos(@PathVariable Long id){
        return service.eliminarProyectos(id);
    }
    


    
}
