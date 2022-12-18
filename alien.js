class Alien {
    constructor() {
      this.r = 70;
      this.x = width;
      this.y = height - 90 - this.r;
    }
      
    move() {
      this.x -= 7;
    } 
      
      
    show() {
    image(aImg, this.x, this.y, this.r, this.r);
      rectMode(CENTER);
      noFill();
    //debugging(hit boxes)
      //rect(this.x + this.r/2, this.y + this.r/2, this.r, this.r);
    
    }
}