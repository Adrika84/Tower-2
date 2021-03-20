class block {
    constructor(x, y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, 50, 60, options);
      this.width = 50;
      this.height = 60;
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      var pos =this.body.position;
          rectMode(CENTER);
          fill("lightpink")
          rect(pos.x, pos.y, this.width, this.height);
        
      //       if(this.body.speed < 3) {
      //         console.log(this.body.speed);
      //       } else {
      //         World.remove(world, this.body);
      //         push();
      //         this.visibility = this.visibility - 5;
      //         tint(255, this.visibility);
      //         rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
      //         pop();
      //    }
       }
  };