
const puzzleEL = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#state')

let game1 = new Hangman("morocco", 2)
puzzleEL.textContent = game1.getPuzzel()
guessEl.textContent = game1.getStatusMessage()


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEL.textContent = game1.getPuzzel()
    game1.getStatus()
    guessEl.textContent = game1.getStatusMessage()
})

getPuzzle((error, puzzle) => {
    if(error){
        console.log(`Error: ${error}`)
    }else{
        console.log(puzzle)
    }
})

getCountry('US', (error, country) => {
    if(error){
        console.log(error)
    }else{
        console.log(`Country name : ${country.name}`)
    }
})



