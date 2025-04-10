package com.example.rento;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.example.rento")
public class RentoApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentoApplication.class, args);
	}

}
