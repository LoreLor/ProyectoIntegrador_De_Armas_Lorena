package com.portfolio.crud.security.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.portfolio.crud.modelos.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwTokenUtil {
    private static final Logger LOGGER= LoggerFactory.getLogger(JwTokenUtil.class);
    private static final long EXPIRE_DURATION=24*60*60*1000; //24hs

    @Value("${jwt.secret}")
    private String secret;

    public String generateAccessToken(User user){
        return Jwts.builder()
        .setSubject(user.getId() + "," + user.getEmail())
        .setIssuer("codeJava")
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis()+EXPIRE_DURATION))
        .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    public boolean validateAccessToken(String token){
        try{
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);

            return true;

        }catch(ExpiredJwtException ex){
            LOGGER.error("JWT expired", ex);

        }catch(IllegalArgumentException ex){
            LOGGER.error("Token is null, empty or has only whitespace", ex);

        }catch(MalformedJwtException ex){
            LOGGER.error("JWT is invalid", ex);

        }catch(UnsupportedJwtException ex){
            LOGGER.error("JWT is not soported", ex);

        }catch(SignatureException ex){
            LOGGER.error("signature validation failed", ex);
        }

            return false;
    }


    public String getSubject(String token){
        return parseClaims(token).getSubject();
    }

    
    private Claims parseClaims(String token){
        return Jwts.parser()
        .setSigningKey(secret)
        .parseClaimsJws(token)
        .getBody();
    }


    
}
