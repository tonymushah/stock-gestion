package mg.tonymushah.itu.stockgestion.repositories;

import org.springframework.data.repository.CrudRepository;

import mg.tonymushah.itu.stockgestion.classes.db.DBArticle;

public interface DBArticleRepository extends CrudRepository<DBArticle, String> {
    
}
