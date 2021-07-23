class Ice {
    constructor(x,y,r){
        var options={
            restitution:1,
            friction: 1,
            density: 4
        }
   // this.image = loadImage("snow4.webp")
        this.image = loadImage("snow5.webp")
       this.sno = Bodies.circle(x,y,r,options);
       World.add(world,this.sno);
       

    }
    display(){
        image(this.image,this.sno.position.x,this.sno.position.y,30,30);
        //image(this.image,this.sno.position.x,this.sno.position.y,50,50);
    }
}