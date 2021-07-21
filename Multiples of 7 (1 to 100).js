// vvv Editar aquí vvv


Numero = 8
// Sacar múltiplos de...

Min = 1
// Número mínimo, se usará para empezar.

Max = 100
// Número máximo, se usará para terminar.


// ^^^ Editar aquí^^^














function multiple(n, multiple){

    resto = n % multiple;

    if(resto==0){

//        console.log(n); // This show all the multiples one by one. It spams the console...
        return true;

}else{

        return false;

}};


var multiples=[];

for(var i=Min;i<=Max;i++){

    if(multiple(i,Multiplo)){

        multiples.push(i);

    };

};

console.log("Múltiplos de " + Multiplo + ":", multiples);