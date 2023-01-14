var car = {
    make : "volvo",
    speed : 160,
    engine : {
        size : 2.0,
        make: "bmw",
        fuel : "petrol",
        pistons : [{maker : "BMW1"}, {maker : "BMW2"}]
    },
    drive : function(){return "drive";}
};

console.log(car.make)

// car.color = "red";
// delete car.color;

var arr = [1,2,3,4]
// arr[0]
// arr.length)
// array.shift() - deletes first element and returns it
// array.pop() - pops off last element in array and returns it
// array.unshift(-1) - inserts -1 at the start
// array.push(55) - adds 55 to the end of array
// array.splice(2, 2) - starting from index 2, delete 2 elements
// array.splice(1, 0, 55) - starting at index 1, don't delete but add 55
