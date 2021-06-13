package com.example.demoControllerRepoz;


	import Data.Question;
	import org.springframework.data.repository.CrudRepository;

	public interface MyQuestion extends CrudRepository<Question,Integer> {
	}


}