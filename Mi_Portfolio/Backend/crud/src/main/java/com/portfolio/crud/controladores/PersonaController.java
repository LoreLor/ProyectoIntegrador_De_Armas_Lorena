package com.portfolio.crud.controladores;


import java.util.List;
import com.portfolio.crud.modelos.Persona;
import com.portfolio.crud.servicios.PersonaService;
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

public class PersonaController {
    @Autowired
    private PersonaService service;

    @GetMapping("/persona")
    public List<Persona>mostrarPersona(){
        return service.mostrarPersona();
    }

    @GetMapping("/persona/{id}")
        public Persona  mostrarPersonaId(@PathVariable Long id){
            return service.mostrarPersonaId(id);
    }

    @PostMapping("/persona")
    public Persona agregarPersona(@RequestBody Persona persona){
        return service.agregarPersona(persona);
    }

    @PutMapping("/persona/{id}")
    public Persona editar(@RequestBody Persona persona, @PathVariable Long id){
         //persona.setId(persona.getId());
         //persona.setNombres(persona.getNombres());
         //persona.setApellidos(persona.getApellidos());
        return service.editarPersona(persona);
    }

    @DeleteMapping("/persona/{id}")
        public Persona borrar(@PathVariable Long id){
            return service.eliminarPersona(id);
        }
    }
    