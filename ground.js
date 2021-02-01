class ground{
    constructor(x,y,width,height){
        var box_options={
            isStatic:true
        }
    this.body = Bodies.rectangle(x,y,width,height,box_options)
    this.w =  width;
    this.h = height;
    World.add(world,this.body)
    }
    
    display(){
    var pos = this.body.position
    rectMode(CENTER)
    fill("green");
    rect(pos.x,pos.y,this.w,this.h)
    }
}
















