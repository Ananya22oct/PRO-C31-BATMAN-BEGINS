class Umbrella{
    constructor(x,y){
       var options={
            isStatic:true,
            restitution:0.1
        }

        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.body=Bodies.circle(x,y,150,options);
        this.radius=150;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,400,400);
    }
}