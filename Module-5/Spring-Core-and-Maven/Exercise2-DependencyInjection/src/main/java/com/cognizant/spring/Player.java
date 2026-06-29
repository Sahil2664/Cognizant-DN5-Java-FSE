package com.cognizant.spring;

public class Player {
    private String name;
    private String position;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPosition() {
        return position;
    }

    @Override
    public String toString() {
        return "Player [name=" + name + ", position=" + position + "]";
    }
}
