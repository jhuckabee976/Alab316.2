const randomNum = Math.floor(Math.random() * 100 + 1)

console.log(randomNum);

window.alert(guessNumber(randomNum))



function guessNumber(randomNum) {
    let guess = parseInt(window.prompt(`Please guess a number between 1-100`))
    console.log(guess);

    let attempt = 1
    let returnMessage

    if(! isNaN(guess)){
        while (guess !== randomNum && attempt < 10){
            if (guess < randomNum) {
              returnMessage = `Number is higher than your guess. Please try again.`
            } else {
                returnMessage = `Number is less than your guess. Please try again.`
            } attempt ++
                guess = parseInt(window.prompt(`${returnMessage}, Please guess a number between 1-100`))
        } 
           
    } else {
        returnMessage = `Please enter a valid number, restart the game`
    }
    
    if (guess === randomNum) {
        returnMessage = `YOU WIN! :) The number was ${randomNum}`
    }
        else if (attempt === 10) {
            returnMessage = `Game Over :(You took more than 10 tries)`
            returnMessage = `Try again`
    }
    console.log(returnMessage);
    
    }

