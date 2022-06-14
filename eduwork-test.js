// nomer 1
function perkalian(x) {

  // if number is 0
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * perkalian(--x);
  }
}
console.log(perkalian(4));
console.log(perkalian(8));

nomer 2
function reverseString(str) {
  var currentString = str;
  var newString = '';
 for (let i = str.length - 1; i >= 0; i--) {
   newString = newString + currentString[i];
  }
  
  return newString;
 }
 console.log(reverseString('abcde'));

// nomer 3
function test(string) {
let firstItem = string.replace(/-A/g ,'').split('').join('').split('').join('');
string =string.replace(/-A/g , '').split('').join('').split('');
let hasil = '';
hasil += firstItem + '\n'
for(let i = 0 ; i < string.length; i++){
  hasil += string[i]';
  for(let j = 0 ;  string.length - 1; j--){
    hasil +=0
  }
  hasil += '\n'
}
return hasil;
}
console.log(getCountOfDigits('9.86-A5.321')); 

nomer 4
let a = 3;
let b = 7;

[a, b] = [b, a];

console.log(`a = ${a} dan b = ${b}`);

nomer 5
function pembilang(nilai){
  nilai = Math.abs(nilai);

  var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  var temp="";

  if (nilai < 12) {
      temp = " "+huruf[nilai];
  }
  else if (nilai <20) {
      temp = pembilang(nilai - 10) + " Belas";
  }
  else if (nilai < 100) {
      simpanNilaiBagi = Math.floor(nilai/10);
      temp = pembilang(0)+" Puluh"+ pembilang(nilai % 10);
  }
  else if (nilai < 200) {
      temp = " Seratus" + pembilang(nilai - 100);
  }


  return temp;
}

console.log(pembilang(104));

// nomer 6
let numbers = [1,4,7,9,12];

let filteredNumbers = numbers.filter(function (currentElement) {
  return currentElement > 2 && currentElement < 15;
});

console.log(filteredNumbers);

// nomer 7
let numbers = [1,4,7,9,12];

let filteredNumbers = numbers.filter(function (currentElement) {
  return currentElement > 2 && currentElement < 15;
}).length;

console.log(filteredNumbers);

// nomer 8
function Eduwork(angka) {
  for (i = 1; i <= angka; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('eduwork');
    }else if(i % 3 === 0 ) {
      console.log('edu');
    } else if( i % 5 === 0) {
      console.log('work');
    }else {
      console.log(i);
    }
  }
}
Eduwork(15);

nomer 9
let arrayList =  [4,2,6,88,3,11];

//for max element from array
let max = arrayList[0];
for (let i = 1; i < arrayList.length; ++i) {
  if (arrayList[i] > max) {
    max = arrayList[i];
  }
}

// for min element from array
let min = arrayList[0];
for (let i = 1; i < arrayList.length; ++i) {
  if (arrayList[i] < min) {
    min = arrayList[i];
  }
}

console.log('Maximum value from array :- ' + max);
console.log('Minimum value from array :- ' + min);

nomer 10
function checkLeapYear(year) {

  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}


// console.log(checkLeapYear(2021));
console.log(checkLeapYear(2024));
