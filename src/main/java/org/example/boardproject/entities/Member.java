package org.example.boardproject.entities;

import jakarta.persistence.*;

@Entity
public class Member {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="member_id")
    @Id
    long id;

}
