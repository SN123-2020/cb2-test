class ground{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
			friction:2
		}

		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.image=loadImage("park.jpg");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display(){
		var groundPosition=this.body.position;

		push()
		translate(groundPosition.x, groundPosition.y);
		rectMode(CENTER);
		imageMode(CENTER);
		image(this.image,-50,-300,1700,850);
		pop()
	}
}