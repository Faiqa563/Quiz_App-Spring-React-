package com.example.demoControllerRepoz;
import org.springframework.data.repository.CrudRepository;

import Data.Anwser;
public interface MyAnswer<Choices> extends CrudRepository<Choices,Integer> {

}
