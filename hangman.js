const Hangman = function(word, remainingGusses){
    this.word = word.toLowerCase().split('')
    this.remainingGusses = remainingGusses
    this.guessedLetters = []
    this.status = 'Playing'
    
}

Hangman.prototype.getPuzzel = function(){
    let puzzle = ''
    this.word.forEach(letter => {
        if(this.guessedLetters.includes(letter)){
            puzzle += letter
        }else{
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if(this.status !== 'Playing'){
        return
    }

    if(isUnique){
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess){
        this.remainingGusses--
    }
}

Hangman.prototype.getStatus = function(){

    // let guessed = this.word.filter(letter => this.guessedLetters.indexOf(letter)> -1)
    const finished = this.word.every(letter => this.guessedLetters.includes(letter)) 
    if(this.remainingGusses === 0){
       return  this.status = `Failed`
    }else if(finished){
        return this.status = `Finished`
    }else{
        return this.status = 'Playing'
    }
}

Hangman.prototype.getStatusMessage = function(){
    if(this.status === 'Playing'){
        return `Guesses left: ${this.remainingGusses}`
    }else if(this.status === 'Failed'){
        return `Nice try! the word was "${this.word.join('')}"`
    }else{
        return 'Great work! You guessed the word'
    }
}




