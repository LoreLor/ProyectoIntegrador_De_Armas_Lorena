package com.portfolio.crud.repositorios;



import java.util.List;

import com.portfolio.crud.modelos.SoftSkills;
import org.springframework.data.repository.Repository;



public interface SoftSkillsRepository extends Repository<SoftSkills, Long> {
    List<SoftSkills>findAll();
    SoftSkills findById(Long id);
    SoftSkills save(SoftSkills persona);
    SoftSkills delete(SoftSkills persona);

 
}
