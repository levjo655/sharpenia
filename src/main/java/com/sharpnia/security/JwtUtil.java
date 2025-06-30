package com.sharpnia.security;

import io.jsonwebtoken.*;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtil {
    @Value("${jwt.secret}")
    private String jwtsecret;
    @Value("${jwt.expiration}")
    private int jwtExpirationMS;
    private SecretKey key;
   @PostConstruct
    public void init() {
       this.key = new SecretKeySpec(jwtsecret.getBytes(StandardCharsets.UTF_8), "AES");
   }

   //generating Token
    public String generateToken(String username) {
       return Jwts.builder()
               .setSubject(username)
               .setIssuedAt(new Date())
               .setExpiration(new Date((new Date().getTime() + jwtExpirationMS)))
               .signWith(key, SignatureAlgorithm.HS256)
               .compact();
    }

    //Get username from Jwt token

    public String getUsernameFromToken(String token) {
       return Jwts.parserBuilder()
               .setSigningKey(key).build()
               .parseClaimsJws(token)
               .getBody()
               .getSubject();
    }

    //validate JWT token
    public boolean validateToken(String token) {
       try {
           Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
           return true;
       } catch (SecurityException e) {
           System.out.println("Invalid JWT signature: " + e.getMessage());
       } catch (MalformedJwtException e) {
           System.out.println("Invalid JWT token: " + e.getMessage());
       } catch (ExpiredJwtException e) {
           System.out.println("JWT token is expired: " + e.getMessage());
       } catch (UnsupportedJwtException e) {
           System.out.println("JWT token is unsupported: " + e.getMessage());
       } catch (IllegalArgumentException e) {
           System.out.println("JWT claims string is empty: " + e.getMessage());
       }
        return false;
    }
    }

//    private Key getSigningKey() {
//        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
//    }
//
//    public String generateToken(String username) {
//        Date now = new Date();
//        Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);
//
//        return Jwts.builder()
//                .setSubject(username)
//                .setIssuedAt(now)
//                .setExpiration(expiryDate)
//                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
//                .compact();
//    }
//
//    public String getUsernameFromToken(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(getSigningKey())
//                .build()
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//
//    public boolean validateToken(String token) {
//        try {
//            Jwts.parserBuilder()
//                    .setSigningKey(getSigningKey())
//                    .build()
//                    .parseClaimsJws(token);
//            return true;
//        } catch (Exception e) {
//            return false;
//        }
//    }

