// package com.portfolio.crud;

// import static org.assertj.core.api.Assertions.assertThat;

// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
// import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.test.annotation.Rollback;

// import com.portfolio.crud.modelos.User;
// import com.portfolio.crud.repositorios.UserRepository;


// @DataJpaTest
// @AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
// @Rollback(false)
// public class UserRepositoryTests {
// 	@Autowired
// 	UserRepository userRepo;

// 	@Test
// 	public void testCreateUser() {
// 		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
// 		String rawPassword ="lolo12345";  
// 		String encodePassword= passwordEncoder.encode(rawPassword);
// 		User newUser = new User( "lolor@gmail.com", encodePassword);
// 		User savedUser = userRepo.save(newUser);
// 		assertThat(savedUser).isNotNull();
// 		assertThat(savedUser.getId()).isGreaterThan(0);
// 	}
// }
