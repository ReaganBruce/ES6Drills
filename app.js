/*
let name = "Reagan";
let message = `Hello, World! Below me is a new line
check that out, pretty cool, huh? I'm adding new lines with template literals!
Here is another one!`
console.log(message);

console.log(`Hello! My name is ${name}!`);


function myName(firstName, lastName){
    let fullName = console.log(`Hello, my name is ${firstName} ${lastName}.`);
    return fullName;
}
myName('Reagan', 'Bruce');

console.log(`The sum of 2 + 4 is ${2 + 4}!`)
console.log(`The remainder of 10 and 6 is ${10 % 6}`)



function greet(name = 'World!'){
    alert(`Hello ${name}`);
}
greet('Reagan!')
greet();


function whatName(firstName = 'Reagan', lastName = 'Bruce'){
    alert(`Hello ${firstName} ${lastName}!`)
}
whatName();


function add(num1, num2 = 10, num3 = 5){
    console.log(num1 + num2 - num3);
}

add(10, 10, 10); //outputs 20;


//expression function shorthand:

let add = (a,b) => {
    console.log(a + b);
}
add(5,5);

let subtract = (x,y) => {
    console.log(x - y);
}
subtract(10,5);

let multiply = (x,y) => {
    console.log(x * y);
}
multiply(5,2);

let division = (x,y) => {
    console.log(x / y);
}
division(50, 10);

let remainder = (x,y) => {
    console.log(x % y);
}
remainder(40, 15)

//let name = firstName => {
    //console.log(firstName);
    //}
    //name('Reagan');
    
    let name = (firstName, lastName) => {
        console.log(firstName);
        console.log(lastName);
    }
    name('Reagan', 'Bruce');
    
    
    let add = (num1, num2) => num1 + num2;
    let result = add(5,5);
    console.log(result);
    
    let myName = name => name;
    let outputName = myName('Reagan');
    console.log(outputName);
    
    let fullName = (firstName, lastName) => (`Hello, my name is ${firstName} ${lastName}`);
    let resultedName = fullName('Reagan', 'Bruce')
    console.log(resultedName)
    
    let p1 = {
        firstName: 'Reagan',
        lastName: 'Bruce',
    }
    
    let getName = person => `${person.firstName} ${person.lastName}`;
    let result = getName(p1);
    console.log(result);
    
    let getStats = (a,b) => ({
        addition: a + b,
        subtraction: a - b,
        multiplication: a * b,
        dividing: a / b,
    })
    
    
    let results = getStats(5,5);
    alert(results);
    
    
    let object = {
        firstName: 'Reagan',
        age: 25,
    };
    
    let getName = (value) => value.age
    console.log(getName(object)); 
    
    let add = (a,b,c) => a + b + c;
    
    let enteredValues = [10, 10, 10];
    
    console.log(add(...enteredValues)); //"spread" operator on a function call
    
    console.log(add.apply(null, enteredValues)); //"add" operator on a function call
    
    let lowNumbers = [1,2,3,4];
    let highNumbers = [7,8,9,10]
    
    let numbers = [...lowNumbers, 5,6, ...highNumbers]
    console.log(numbers);
    
    
    let string = ('Reagan');
    
    let characters = [...string];
    console.log(characters);
    
    function getStats(a,b){
        let sum = a + b;
        let difference = a - b;
        
        return {sum, difference}
    }
    let stats = getStats(5,5);
    console.log(stats);
    
    
    //destructuring assignment in an object
    let p1 = {
        firstName: 'Reagan',
        lastName: 'Bruce',
        age: 25,
    }
    
    //let {firstName} = p1;
    //let {lastName} = p1;
    //let {age} = p1;
    let {firstName, lastName, age, gender = 'male'} = p1;
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(gender);
    */

    let address = {
        street: '1429 10th Place S',
        city: 'Birmingham',
        state: 'Alabama',
        latitude: '33.514961',
        longitude: '86.807853',
    }


    function getCoordinates({latitude, longitude}) {
        console.log(latitude);
        console.log(longitude);
    }
    
    getCoordinates(address);

    
   
   
   
   
   
   
