package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.HardSkills;
import com.portfolio.crud.repositorios.HardSkillsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class HardSkillsServiceImp implements HardSkillsService{
    @Autowired
    private HardSkillsRepository hardRepo;

    @Override
    public List<HardSkills>mostrarHardSkills(){
        return hardRepo.findAll();
    }

    @Override
    public HardSkills mostrarHardSkillsId(Long id){
        return hardRepo.findById(id);
    }

    @Override
    public HardSkills editarHardSkills(HardSkills hardskills){
        return hardRepo.save(hardskills);
    }

    @Override
    public HardSkills eliminarHardSkills(Long id){
    HardSkills hardskills = hardRepo.findById(id);
    if(hardskills != null){
        return hardRepo.delete(hardskills);
        }
        return hardskills;
    }

    @Override
    public HardSkills agregarHardSkills(HardSkills hardskills) {
        return hardRepo.save(hardskills);
    }
 
}
