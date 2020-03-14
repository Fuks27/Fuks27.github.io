function findOddEven(){
    //get the input value
    var num = document.getElementById("cislo").innerHTML = ( + new Date().getWeekNumber());

    //if the value of c is 2 then it is a prime number
    //because a prime number should be exactly divisible by 2 times only (itself and 1)
    if ( num % 2 == 0) {
              document.getElementById("okej").innerHTML = ' - Párny týždeň' ;
    }else{
              document.getElementById("okej").innerHTML =' - Nepárny týždeň';
    }
}

function myFunction() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;
  document.getElementById('vysledok').innerHTML = 'Dnes je '+ (today) + document.getElementById("result").innerHTML;
}


var addFunctionOnWindowLoad = function(callback){
      if(window.addEventListener){
          window.addEventListener('load',callback,false);
      }else{
          window.attachEvent('onload',callback);
      }
}

addFunctionOnWindowLoad(findOddEven);
addFunctionOnWindowLoad(myFunction);
