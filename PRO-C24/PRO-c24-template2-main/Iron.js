class Iron{
	constructor(x,y,r)
	{
	var options={
		restitution: 0.8,
		friction:3,
		density:30
	}
        this.body = Bodies.rectangle(x,y,100,50,options);
        this.width = 100;
        this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			var pos =this.body.position;
            rectMode(CENTER);
            fill("silver");
            rect(pos.x, pos.y, this.width, this.height);
            pop()
    }
}
		