package com.portfolio.crud.controladores;

import java.util.List;

import com.portfolio.crud.modelos.Experiencia;
import com.portfolio.crud.servicios.ExperienciaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", maxAge = 3600)
public class ExperienciaController {
    @Autowired
    private ExperienciaService service;

    @GetMapping("/experiencia")
    public List<Experiencia>mostrarExperiencia(){
        return service.mostrarExperiencia();
    }

    @GetMapping("/experiencia/{id}")
    public Experiencia mostrarExperienciaId(@PathVariable Long id){
        return service. mostrarExperienciaId(id);
    }

    @PostMapping("/experiencia")
    public Experiencia agregarExperiencia(@RequestBody Experiencia experiencia){
        return service.agregarExperiencia(experiencia);
    }

    @PutMapping("/experiencia/{id}")
    public Experiencia editarExperiencia(@RequestBody Experiencia experiencia, @PathVariable Long id){
        // experiencia.setId(experiencia.getId());
        // experiencia.setNombreTrabajo(experiencia.getNombreTrabajo());
        // experiencia.setAnios(experiencia.getAnios());
        // experiencia.setDescripcion(experiencia.getDescripcion());
        return service.editarExperiencia(experiencia);
    }

    @DeleteMapping("/experiencia/{id}")
        public Experiencia eliminarExperiencia(@PathVariable Long id){
            return service.eliminarExperiencia(id);
        }  
}
