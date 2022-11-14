/// <reference path="../js/p5.global-mode.d.ts" />
class Node {
  constructor(x,y, label, text){
    this.pos = createVector(x, y);
    this.label = label;
    this.text = text;
    this.velocity = createVector(1,1);
  }
  show(){
    fill(0);
    rect(this.pos.x, this.pos.y, 100, 200);
    noStroke();
    textSize(20);
    fill(255);
    text(this.label, this.pos.x+20, this.pos.y + 20);
    noFill();
  }
  move(){
    
    this.pos.add(this.velocity);
  }
}
function setup() {
    createCanvas(500, 500);
    ball = new Node(250, 250, 'Node1', 'Im a node');
  }
  
function draw() {
    ball.move();
    ball.show();

  }