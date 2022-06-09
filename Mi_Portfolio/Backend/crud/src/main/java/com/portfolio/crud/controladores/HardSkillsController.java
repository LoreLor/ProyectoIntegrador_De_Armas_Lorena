package com.portfolio.crud.controladores;

import java.util.List;

import com.portfolio.crud.modelos.HardSkills;
import com.portfolio.crud.servicios.HardSkillsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200", maxAge = 3600 )
public class HardSkillsController {
    @Autowired
    private HardSkillsService service;

    @GetMapping(value="/hardskills")
    public List<HardSkills>mostrarHardSkills(){
        return service.mostrarHardSkills();
    }

    @GetMapping(value="/hardskills/{id}")
    public HardSkills mostrarHardSkillsId(@PathVariable Long id){
        return service.mostrarHardSkillsId(id);
    }

    @PostMapping(value="/hardskills")
    public HardSkills agregarHardSkills(@RequestBody HardSkills hardskills) {
        return service.agregarHardSkills(hardskills);
    }

    @PutMapping(value="/hardskills/{id}")
    public HardSkills editarHardSkills(@PathVariable Long id, @RequestBody HardSkills hardskills) {
        // hardskills.setId(hardskills.getId());
        // hardskills.setTitle(hardskills.getTitle());
        // hardskills.setPercent(hardskills.getPercent());
        return service.editarHardSkills(hardskills);
    }

    @DeleteMapping(value="hardskills/{id}")
    public HardSkills eliminarHardSkills(@PathVariable Long id){
        return service.eliminarHardSkills(id);
    }
    

    
}
