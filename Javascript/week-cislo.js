function findOddEven(){
    //get the input value
    var num = document.getElementById("demo").innerHTML = ( + new Date().getWeekNumber());

    //if the value of c is 2 then it is a prime number
    //because a prime number should be exactly divisible by 2 times only (itself and 1)
    if ( num % 2 == 0) {
        document.getElementById('result').innerHTML = 'Párny týždeň' ;
    }else{
        document.getElementById('result').innerHTML ='Nepárny týždeň';
    }
}
