/// <reference path="../js/p5.global-mode.d.ts" />
class Ball {
    PVector location;
    PVector velocity;

    Ball(){
        location = new PVector(width/2, height/2);
        velocity = new PVector(2.5, -2); 
    }
    void move(){
        location = location + velocity;
    }
    void bounce(){

    }
}