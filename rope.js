class Rope{

    constructor(body1,body2,OffsetX){
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:OffsetX,y:0},
        
        }

        this.rope = Constraint.create(options)
        this.OffsetX = OffsetX
      
        World.add(world,this.rope)
    }

    display(){
        stroke("lightpink")
        strokeWeight(2)
        var pointA = this.rope.bodyA.position;
        var pointB =  this.rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x+this.OffsetX,pointB.y)
    }

}