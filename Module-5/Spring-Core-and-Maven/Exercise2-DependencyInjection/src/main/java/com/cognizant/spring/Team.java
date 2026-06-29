package com.cognizant.spring;

public class Team {
    private String teamName;
    private Player captain;

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setCaptain(Player captain) {
        this.captain = captain;
    }

    public Player getCaptain() {
        return captain;
    }

    public void displayTeamInfo() {
        System.out.println("Team Name: " + teamName);
        System.out.println("Captain: " + captain);
    }
}
