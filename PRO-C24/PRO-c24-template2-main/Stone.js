class Stone{
	constructor(x,y,r)
	{
	var options={
		restitution: 0.8,
		friction:3,
		density:12
	}
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height = 100;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			var pos =this.body.position;
            rectMode(CENTER);
            fill("grey");
            rect(pos.x, pos.y, this.width, this.height);
            pop()
    }
}
			
	
