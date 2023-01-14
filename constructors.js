function Apple(x, y){
    this.x = x
    this.y = y
}

Apple.prototype = {
    eat: function(){return "eat the apple!";},
    throw: function(){return "throw the apple!";}
}

apple1 = new Apple(20, 50)
apple2 = new Apple(15, 55)