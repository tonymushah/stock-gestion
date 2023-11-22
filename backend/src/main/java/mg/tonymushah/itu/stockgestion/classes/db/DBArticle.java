package mg.tonymushah.itu.stockgestion.classes.db;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class DBArticle {
    @Id
    private String id;
    private String nom;
    private UUID unite;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public UUID getUnite() {
        return unite;
    }
    public void setUnite(UUID unite) {
        this.unite = unite;
    }
    public DBArticle(String nom, UUID unite) {
        this.setNom(nom);
        this.setUnite(unite);
    }
}
