class Bob{
    constructor(x){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.8
        }
        this.body = Bodies.circle(x,400,35,options);        
        World.add(world,this.body)
    }

    display(){
        strokeWeight(7)
	stroke(rgb(255,0,85))
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,66,66);  //ellipse(x,y,d,d)
    }
}