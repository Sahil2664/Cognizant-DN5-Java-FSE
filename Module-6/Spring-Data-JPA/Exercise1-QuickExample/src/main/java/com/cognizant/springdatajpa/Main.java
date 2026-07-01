package com.cognizant.springdatajpa;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        System.out.println("Initializing Spring Context...");
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        EmployeeRepository repository = context.getBean(EmployeeRepository.class);

        // Create
        System.out.println("Saving employee...");
        repository.save(new Employee("John Doe", "Engineering"));
        repository.save(new Employee("Jane Smith", "Marketing"));

        // Read
        System.out.println("Finding all employees...");
        repository.findAll().forEach(System.out::println);

        context.close();
    }
}
