// task1
// alert('Welcome to my site');
// let name = prompt('Enter your name');
// document.write('<h1 class=" name"'+name +'</h1>');
// // let name= eval('Enter your name',);

// task2
// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// function funOnClick(){
//     let num1 = prompt('Enter your number1');
//     let num2 = prompt('Enter your number2');

//     sum(parseInt(num1),parseInt(num2));
// }


// task3
// function temprature(temp){
//    (temp>=30)? console.log("HOT"): console.log("Cold");
// }
// temprature(50);
// temprature(20);
// temprature(30);



// task4
// function checkTemperature(temp, actualFeel) {
//     if (temp >= 25 && temp <= 30 && actualFeel >= 25 && actualFeel <= 30) {
//         console.log("Normal");
//     } else if (temp < 25 && actualFeel < 25) {
//         console.log("Cold");
//     } else if (temp > 30 && actualFeel > 30) {
//         console.log("Hot");
//     } else {
//         console.log("Ambiguous, can’t detect");
//     }
// }

// checkTemperature(25, 30)
// checkTemperature(12, 12)
// checkTemperature(45, 444)
// checkTemperature(20, 35)


// task5
// function faculty(fuc) {
//     switch (fuc) {
//         case "FCI": 
//             console.log("You’re eligible to Programming tracks");
//             break;
//         case "Engineering": 
//             console.log("You’re eligible to Network and Embedded tracks");
//             break;
//         case "Commerce": 
//             console.log("You’re eligible to ERP and Social media tracks");
//             break;
//         default: 
//             console.log("You’re eligible to SW fundamentals track");
//     }
// }

// faculty("Engineering");
// faculty("Commerce");
// faculty("FCI");
// faculty("Doctor");


// task6
// function podd(num1, num2){
// for(let i=num1;i<=num2;i++){
//     if(i&1){
//         document.write(i,"\n");
//     }
// }
// }


// podd(4,9);

// task7
// function getMathExpression() {
//     const expression = prompt("Please enter a math expression:");


//     const result = eval(expression);

//     alert(`You entered: ${expression}, and the result is: ${result}`);

// }


// task8
// function promptForName() {
//     let name = "";
//     while (true) {
//         name = prompt("Please enter your name:");
//         if (name && isNaN(name)) {
//             break;
//         }
//         alert("Invalid input. Please enter a valid name.");
//     }
//     return name;
// }
// function promptForBirthYear() {
//     let birthYear = 0;
//     while (true) {
//         birthYear = parseInt(prompt("Please enter your birth year (must be a number less than 2010):"), 10);
//         if (!isNaN(birthYear) && birthYear < 2010) {
//             break;
//         }
//         alert("Invalid input. Please enter a valid birth year (less than 2010).");
//     }
//     return birthYear;
// }
// function calculateAge(birthYear) {
//     // const currentYear = new Date().getFullYear();
//     return 2010 - birthYear;
// }
// // debugger;
// //revision
// function displayUserInfo(name, birthYear, age) {
//     document.write(`
//                            <p>Name: ${name}</p>
//                             <p>Birth Year: ${birthYear}</p>
//                             <p>Age: ${age}</p>`
//                 );
// }

// function contactPage() {
//     const name = promptForName();
//     const birthYear = promptForBirthYear();
//     const age = calculateAge(birthYear);

//     displayUserInfo(name, birthYear, age);
// }

// contactPage();


