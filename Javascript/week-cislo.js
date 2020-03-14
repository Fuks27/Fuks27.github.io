function findOddEven(){
    //get the input value
    var num = document.getElementsByClassName("demo").innerHTML = ( + new Date().getWeekNumber());

    //if the value of c is 2 then it is a prime number
    //because a prime number should be exactly divisible by 2 times only (itself and 1)
    if ( num % 2 == 0) {
        document.getElementsByClassName('result').innerHTML = '- Párny týždeň' ;
    }else{
        document.getElementsByClassName('result').innerHTML =' - Nepárny týždeň';
    }
}
