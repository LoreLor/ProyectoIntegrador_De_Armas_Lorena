package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.HardSkills;

public interface HardSkillsService {
    List<HardSkills>mostrarHardSkills();
    HardSkills mostHardSkillsId(Long id);
    HardSkills agregarHardSkills(HardSkills hardkills);
    HardSkills editarHardSkills(HardSkills hardkills);
    HardSkills eliminarHardSkills(Long id);
    
}
