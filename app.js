//object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
const puzzleEL = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#state')

let game1 = new Hangman("morocco", 2)
puzzleEL.textContent = game1.getPuzzel()
guessEl.textContent = game1.getStatusMessage()


window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEL.textContent = game1.getPuzzel()
    game1.getStatus()
    guessEl.textContent = game1.getStatusMessage()
})

