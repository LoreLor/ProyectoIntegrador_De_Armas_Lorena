package com.portfolio.crud.repositorios;

import java.util.List;

import com.portfolio.crud.modelos.HardSkills;
import org.springframework.data.repository.Repository;



public interface HardSkillsRepository extends Repository<HardSkills, Long>{
    List<HardSkills>findAll();
    HardSkills findById(Long id);
    HardSkills save(HardSkills persona);
    HardSkills delete(HardSkills persona);

}
