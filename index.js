const app = document.getElementById('app')
//const gameBox = document.createElement('table')


const randomNum = Math.trunc(Math.random() * 100 + 1)
// console.log(Math.trunc(47.12));
// console.log(Math.trunc(47.86));


console.log(randomNum)

//creating prompt for user to guess

// setTimeout(() => {
//     console.log("This is a throwaway mesage");
// },200)
// setTimeout(() => ){
//     console.log('This is a filler message');
// },
let guess
console.log(guess)
let output = ''

window.alert('Welcome! Pleae guess a number between 1-100');

do {
    guess = parseInt(window.prompt("Pick a number between 1-100"))
    if (randomNum === guess) {
        output = `You are such a smart cookie`
    } else {
       output = `Sorry the random number was ${randomNum}, please guess again`
    }
    window.alert(output)

} while (randomNum !== guess);
