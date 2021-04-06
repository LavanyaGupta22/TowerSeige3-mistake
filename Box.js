class Box {
  constructor(x,y,width,height){
    var options = {
      isStatic:false,
      'restitution':0.8,
       'friction':0.0,
      'density':1.2
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
      this.image = loadImage("can.jpg");
  }

  display(){
    if(this.body.speed < 3){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("lightblue");
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);
    pop();
    }
    else {
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
  }
}
