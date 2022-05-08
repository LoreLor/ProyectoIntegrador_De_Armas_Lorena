package com.portfolio.crud.servicios;

import java.util.List;

import com.portfolio.crud.modelos.SoftSkills;

public interface SoftSkillsService {
    List<SoftSkills>mostrarSoftSkills();
    SoftSkills mostrarSoftSkillsId(Long id);
    SoftSkills agregarSoftSkills(SoftSkills softskills);
    SoftSkills editarSoftSkills(SoftSkills softskills);
    SoftSkills eliminarSoftSkills(Long id);
    
}
