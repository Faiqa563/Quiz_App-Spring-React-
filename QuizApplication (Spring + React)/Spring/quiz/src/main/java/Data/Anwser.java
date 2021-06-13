package Data;
import lombok.Data; 
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Anwser {
	@Data
	@Entity
	@NoArgsConstructor
	public class Choices {

	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int id;
	    private String choice;
	    private Boolean isCorrect;

	    public Choices(int id, String choice, Boolean isCorrect) {
	        this.id = id;
	        this.choice = choice;
	        this.isCorrect = isCorrect;
	    }

	}

}
