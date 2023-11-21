package mg.tonymushah.itu.stockgestion.classes.db;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DBUnite {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String nom;
    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public DBUnite(String nom) {
        this.setNom(nom);
    }
    public DBUnite() {
    }
    public DBUnite(UUID id, String nom) {
        this.setId(id);
        this.setNom(nom);
    }
    
}
