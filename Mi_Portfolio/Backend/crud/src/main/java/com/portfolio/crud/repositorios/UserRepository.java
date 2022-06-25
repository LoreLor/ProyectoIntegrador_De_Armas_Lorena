package com.portfolio.crud.repositorios;

import java.util.Optional;

import org.springframework.data.repository.Repository;

import com.portfolio.crud.modelos.User;

public interface UserRepository extends Repository<User, Integer>{
    Optional<User>findByEmail(String email);
    User save(User newUser);
  
}
