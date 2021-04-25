class Stone{
constructor(x,y,diametre)
{ 

    var  options = {
    isStatic : false,
    restitution : 0,
    friction : 1,
    density  : 1.2,
        }

        this.body = Bodies.circle(100,200,10,options);
        this.diametre = diametre;
        this.image = loadImage("images/stone.png");
World.add(world,this.body);

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.image,0,0,this.diametre*2,this.diametre*2);
pop();
}
}