// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// creo e inserisco 5 numeri random in una variabile

var numbers= [];
var userNumbers=[];
var numeriGiusti=[];
for (var i = 0; i < 5; i++) {
  numbers.push(randomNumber(1,100));
};
alert(numbers);

setTimeout(function(){
  for (var i = 0; i < numbers.length; i++) {
    userNumbers.push(parseInt(prompt('inserisci un numero che ricordi')));
    var j = 0;
      while(j < numbers.length) {
        if(numbers[j] == numbers){
          console.log('esiste');
        }else{
          console.log('esiste');
        }
        j++;
      }
    }
  }, 5000);


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
