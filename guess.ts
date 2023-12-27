import inquirer from "inquirer"

let score = 0;
let finalScore = "Your final score is";

for (let i=0; i<3; i++){
    let randNum = Math.round(Math.random()*5);
    let guessNum:{num1: number;} = await inquirer.prompt([{type:"number",name: "num1",message: `\n"Enter your number between the range of 0 to 5"`}]);

if (guessNum.num1 > 5){
    console.log(`\n"Your Number is out of the given range"`)
} else if(randNum === guessNum.num1){
    console.log(`\n"!! YOU GOT 2 POINTS BY GUESSING THE RIGHT NUMBER !!"`)
    score += 2;
} else if (randNum < guessNum.num1){
    console.log(`\n"The number you guessed is Higher than the randomly generated number"`)
} else if (randNum === guessNum.num1){
    console.log(`\n"You guessed the number"`)
} else if (randNum > guessNum.num1){
    console.log(`\n"The number you guessed is Lower than the randomly generated number"`)
}
console.log(`\nThe randomly generated number is ${randNum}`);
}

console.log(`\n----- ${finalScore} ${score} ------`)




// let x = Math.random()*5;
// let mFloor = Math.floor(x)
// let mRound = Math.round(x)
// let mCeil = Math.ceil(x)
// let mFround = Math.fround(x)
// let mMin = Math.min(x)
// let mMax = Math.max(x)
// let mSign = Math.sign(x)
// let mAbsolute = Math.abs(x)

// console.log("random "+x)
// console.log("floor "+mFloor)
// console.log("round "+mRound)
// console.log("ceil "+mCeil)
// console.log("fround "+mFround)
// console.log("min "+mMin)
// console.log("max "+mMax)
// console.log('sign '+mSign)
// console.log('abs '+mAbsolute)