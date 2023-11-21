package mg.tonymushah.itu.stockgestion.repositories;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import mg.tonymushah.itu.stockgestion.classes.db.DBUnite;

public interface DBUniteRepository extends CrudRepository<DBUnite, UUID> {
    
}
