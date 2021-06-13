package com.example.demoController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoControllerRepoz.MyQuiz;
import Data.Quiz;

@RestController


public class QuizController {
	
	


    @Autowired
    MyQuiz quizRepository;
    @GetMapping(value = "/all")
    public List<Quiz> total_data(){
        return (List<Quiz>) quizRepository.findAll();
    }

    @PostMapping(value = "/load")
    public List<Quiz> persist(@RequestBody Quiz quiz){
        quizRepository.save(quiz);
        return (List<Quiz>) quizRepository.findAll();
    }


}
