class rope{
    constructor(Body1, pointB, offsetX, offsetY){
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options ={
      bodyA:Body1,
      pointB:pointB,
      pointB:{x:this.offsetX, y:this.offsetY}
      }
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    display(){
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.pointB;
   stroke("black");
   strokeWeight(10);
   line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
