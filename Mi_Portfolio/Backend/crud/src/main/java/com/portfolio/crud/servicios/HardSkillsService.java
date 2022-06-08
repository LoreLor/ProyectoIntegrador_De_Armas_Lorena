package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.HardSkills;

public interface HardSkillsService {
    List<HardSkills>mostrarHardSkills();
    HardSkills mostrarHardSkillsId(Long id);
    HardSkills agregarHardSkills(HardSkills hardskills);
    HardSkills editarHardSkills(HardSkills hardskills);
    HardSkills eliminarHardSkills(Long id);
    
}
