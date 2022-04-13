class Ground{
    constructor(x, y, w, h){
        var optima = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, optima);
        World.add(world, this.body);
    }
    display(){
        var suelo = this.body.position;
        push();
        translate(suelo.x, suelo.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(173, 255, 47);
        rect(0, 0, this.w, this.h);
        pop();

    }
}