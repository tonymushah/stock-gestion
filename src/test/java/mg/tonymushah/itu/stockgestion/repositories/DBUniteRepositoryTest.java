package mg.tonymushah.itu.stockgestion.repositories;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import jakarta.inject.Inject;

@SpringBootTest
public class DBUniteRepositoryTest {
    @Inject
    DBArticleRepository repository;
    @Test
    void testRepository(){
        
    }
}
