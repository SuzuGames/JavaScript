function multiple(n, multiple){

    resto = n % multiple;

    if(resto==0){

//        console.log(n); // This show all the multiples one by one. It spams the console...
        return true;

}else{

        return false;

}};


var multiples=[];

for(var i=1;i<=100;i++){

    if(multiple(i,7)){

        multiples.push(i);

    };

};

console.log("Multiples of 7:", multiples);