function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.isOverlapped = function(circle){
        var distance = Math.sqrt(Math.pow(this.x - circle.x, 2) + Math.pow(this.y - circle.y, 2));
        if(distance <= this.radius + circle.radius){
            return -1;
        }
        else if(distance > this.radius + circle.radius){
            return 1;
        }
        else{
            return 0;
        }
    }
}
module.exports = Circle;