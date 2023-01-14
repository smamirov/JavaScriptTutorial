function name(){
    var fullname = "Said Mamirov";
    function concact(name){
        return "Mr." + name
    }
    return concact(fullname);
}


function full(n){
    return n();
}

console.log(full(function(){return 20;}));