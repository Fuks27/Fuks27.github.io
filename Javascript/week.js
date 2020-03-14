
function myFunction2(){
Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

document.getElementById("cislo").innerHTML = ( + new Date().getWeekNumber());

}

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
  document.getElementById('vysledok').innerHTML = 'Dnes je '+ (today) + document.getElementById("okej").innerHTML;
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
addFunctionOnWindowLoad(myFunction2);
