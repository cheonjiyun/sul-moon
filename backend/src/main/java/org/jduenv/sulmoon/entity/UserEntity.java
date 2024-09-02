package org.jduenv.sulmoon.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jduenv.sulmoon.dto.SignUpDto;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "account")
public class UserEntity {
    @Id
    private String id;
    private String password;
    private String phone;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime editedAt;

    public UserEntity(SignUpDto dto){
        this.id = dto.getId();
        this.password = dto.getPassword();
        this.phone = dto.getPhone();
        this.name = "닉네임" + dto.getPhone().substring(dto.getPhone().length() - 4);
        this.createdAt = LocalDateTime.now();
        this.editedAt = LocalDateTime.now();
    }
}
