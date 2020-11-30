class paper{
    constructor(x,y,r){

		var options={
			isStatic:false,
			restitution:0.3,
			friction:2,
            density:0.5
        }

		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("Paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-50), options);
		World.add(world, this.body);

    }
    
	display(){
			
        var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER);
		imageMode(CENTER);
		image(this.image,0,0,50,50);
		pop()
			
	}
}