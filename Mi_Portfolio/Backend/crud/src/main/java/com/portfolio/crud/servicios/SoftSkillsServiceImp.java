package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.SoftSkills;
import com.portfolio.crud.repositorios.SoftSkillsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SoftSkillsServiceImp implements SoftSkillsService {
    @Autowired
    private SoftSkillsRepository softRepo;

    @Override
    public List<SoftSkills>mostrarSoftSkills(){
        return softRepo.findAll();
    }

    @Override
    public SoftSkills mostrarSoftSkillsId(Long id) {
        return softRepo.findById(id);
    }

    @Override
    public SoftSkills agregarSoftSkills(SoftSkills softskills) {
        return softRepo.save(softskills);
    }

    @Override
    public SoftSkills editarSoftSkills(SoftSkills softskills) {
        return softRepo.save(softskills);
    }

    @Override
    public SoftSkills eliminarSoftSkills(Long id) {
        SoftSkills softSkills = softRepo.findById(id);
        if(softSkills != null){
            return softRepo.delete(softSkills);
        }
        return softSkills;
    }    
}
