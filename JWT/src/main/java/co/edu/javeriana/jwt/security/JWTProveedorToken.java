package co.edu.javeriana.jwt.security;

import co.edu.javeriana.jwt.model.entity.Cuenta;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@Component
public class JWTProveedorToken {
    private final String jwtSecret;
    private final long jwtExpirationDate;

    public JWTProveedorToken() {
        jwtSecret = "daf66e01593f61a15b857cf433aae03a005812b31234e149036bcc8dee755dbb";
        jwtExpirationDate = 604800000;
    }

    // generate JWT token
    public String generateToken(Cuenta cuenta, String role) {
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + jwtExpirationDate);

        Map<String, Object> claims = new HashMap<>();
        claims.put("authorities", new SimpleGrantedAuthority(role));

        return Jwts.builder()
                .addClaims(claims)
                .setSubject(cuenta.getIdCuenta().toString())
                .setIssuedAt(new Date())
                .setExpiration(expireDate)
                .signWith(key())
                .compact();
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    // get username from Jwt token
    public String getUsername(String token) {
        Jws<Claims> claimsJws = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token);
        return claimsJws.getBody().getSubject();
    }

    public Claims getClaims(String token) {
        Jws<Claims> claimsJws = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token);
        return claimsJws.getBody();
    }
}