class Ground {
    constructor(x,y,width)
    {
        this.body = Bodies.rectangle(x,y,width,height = 20,{isStatic:true});
        this.x = x;
        this.y = y;   
        this.width = width; 
        this.height = height;
     
        World.add(world,this.body);
    }
  
    display()
    {
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        
        
        rect(pos.x,pos.y,this.width,this.height);
    }
  }