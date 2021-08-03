class Ball{
    constructor(x,y){
        var options={
            restitution:0.8,
            density:1.0,
            friction:0.3
        }

        this.body= Bodies.circle(x,y,20, options);
        this.r= 20;
        World.add(world, this.body);
    }
    display(){
        var pos= this.body.position

        push();
        translate(pos.x, pos.y);
        fill("pink");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}