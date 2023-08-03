/// FUNCTIONS ///

// How To Define A Function And Call The Function //

// Function Definition //
function welcomePersonToCTH () {
console.log("Welcome To CTH, Siddiq");
}

// Call The Function //
welcomePersonToCTH();


// How To Make The Name In Function Dynamic //

function welcomePersonToCTH (name) {
console.log(name);
}

welcomePersonToCTH('Siddiq') 

// How To Use Reuseable Code //

function welcomePersonToCTH (name){
console.log(`Welcome To CTH ${name}`);
}

welcomePersonToCTH('Siddiq')


// In Function We Can Accept Many Parameters //
// Eg//

function welcomePersonToCTH(firstName , lastName) {
    console.log(`Welcome To CTH ${firstName} ${lastName}`);
}

welcomePersonToCTH('Siddiq','Abubakar')


// NB: You Only Need To Define The Function Only Once,
// But you Can Call It Many times You Want // 
// Eg//
function welcomePersonToCTH(firstName , lastName) {
    console.log(`Welcome To CTH ${firstName} ${lastName}`);
}

welcomePersonToCTH('Siddiq','Abubakar')
welcomePersonToCTH('Mohammed','Adam')
welcomePersonToCTH('Razak','Abdul')


// / How To Use A Value Created By The Function ///
// NB: In Other To Use The Value Created By The Function ;
//  We Need To Use The Return Keyword //

function sumOfNumbers (){
    return 5 + 10
}

console.log(sumOfNumbers());


// / How To Make The Return Dynamic ///
// Eg//

function sumOfNumbers (num1 , num2) {
    return num1  +  num2 
}

console.log(sumOfNumbers(10 , 10));


// Ex //
// Create A Function That Convert Celsius To Fahrenheit //

// EG 01 //
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    return fahrenheit
}

console.log(celsiusToFahrenheit(30));


// Eg 02 //
function celsiusToFahrenheit(celsius) {
    return  celsius * 1.8 + 32
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));
console.log(celsiusToFahrenheit(30));


/// Second Way Of Defining A Function ///

const celsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));
console.log(celsiusToFahrenheit(30));

