class Boy {
    constructor() {
      this.r = 100;
      this.x = 50;
      this.y = height - 90 - this.r;
      this.vy = 50;
      this.gravity = 1.5;
    }
     
  jump() {
    if (this.y == height - 90 - this.r) {
      this.vy = -25 ;
   }
  }
  
  hits(alien) {
    
    let x1 = this.x + this.r;
    let y1 = this.y + this.r;
    let x2 = alien.x + alien.r;
    let y2 = alien.y + alien.r;
    
   return collideRectRect(x1, y1, this.r/2, this.r/2 ,x2, y2, alien.r, alien.r);
    
  }
  
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 50, height - 90 - this.r);
  }
  
  
  show() {
    image(bImg, this.x, this.y, this.r, this.r);
    rectMode(CENTER);
    noFill();
    //debugging(hit boxes)
    //rect(this.x + this.r/2, this.y + this.r/2, this.r/2, this.r);
   
    }
}