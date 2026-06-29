package com.cognizant.spring;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        Team team = (Team) context.getBean("teamBean");
        team.displayTeamInfo();
        
        context.close();
    }
}
