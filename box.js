class Box {
  constructor(x,y)
  {
    var options ={
      'restitution': 0.8,
      'friction': 0.8
    }
    this.body = Bodies.rectangle(x,y,width = 50,height = 50,options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;


    World.add(world,this.body);
  }
  display()
  {
    var angle = this.body.angle;
    var pos =this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill('aquamarine');
  
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
}















/*
class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    
      
    }
  
  };
  


  */