package com.portfolio.crud.controladores;

import java.util.List;

import com.portfolio.crud.modelos.Educacion;
import com.portfolio.crud.servicios.EducacionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", maxAge = 3600)
public class EducacionController {
    @Autowired
    private EducacionService service;

    @GetMapping("/educacion")
    public List<Educacion>mostrarEducacion(){
        return service.mostrarEducacion();
    }

    @GetMapping("/educacion/{id}")
    public Educacion mostrarEducacionId(@PathVariable Long id){
        return service.mostrarEducacionId(id);
    }

    @PostMapping("/educacion")
    public Educacion agregarEducacion(@RequestBody Educacion educacion){
        return service.agregarEducacion(educacion);
    }

    @PutMapping("/educacion/{id}")
    public Educacion editarEducacion(@RequestBody Educacion educacion, @PathVariable Long id){
        // educacion.setId(educacion.getId());
        // educacion.setNombre(educacion.getNombre());
        // educacion.setAnios(educacion.getAnios());
        // educacion.setDescripcion(educacion.getDescripcion());
        return service.editarEducacion(educacion);
    }

    @DeleteMapping("/educacion/{id}")
    public Educacion eliminarEducacion(@PathVariable Long id){
        return service.eliminarEducacion(id);
    }
  
    
    
}
