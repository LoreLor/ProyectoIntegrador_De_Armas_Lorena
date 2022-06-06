package com.portfolio.crud.controladores;

import java.util.List;

import com.portfolio.crud.modelos.SoftSkills;
import com.portfolio.crud.servicios.SoftSkillsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class SoftSkillsController {
    @Autowired
    private SoftSkillsService service;

    @GetMapping(value="/softsKills")
    public List<SoftSkills> mostrarSoftSkills() {
        return service.mostrarSoftSkills();
    }

    @GetMapping(value="/softsKills/{id}")
    public SoftSkills mostrarSoftSkillsId(@PathVariable Long id) {
        return service.mostrarSoftSkillsId(id);
    }

    @PostMapping(value = "/softskills")
    public SoftSkills agregarSoftSkills(@RequestBody SoftSkills softskills){
        return service.agregarSoftSkills(softskills);
    }

    @PutMapping(value = "/softskills")
    public SoftSkills editarSoftSkills(@PathVariable Long id, @RequestBody SoftSkills softSkills){
        return service.editarSoftSkills(softSkills);
    }

    @DeleteMapping(value = "/softskills/{id}")
    public SoftSkills eliminarSoftSkills(@PathVariable Long id){
        return service.eliminarSoftSkills(id);
    }   
}
