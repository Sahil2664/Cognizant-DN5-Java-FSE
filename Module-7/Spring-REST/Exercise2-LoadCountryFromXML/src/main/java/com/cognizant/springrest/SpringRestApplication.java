package com.cognizant.springrest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringRestApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringRestApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringRestApplication.class, args);
        displayCountry();
    }

    public static void displayCountry() {
        LOGGER.info("START");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("in");
        LOGGER.debug("Country : {}", country.toString());
        LOGGER.info("END");
    }
}
