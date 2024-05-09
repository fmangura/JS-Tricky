function guessingGame() {
    this.answer = Math.floor(Math.random() * 100);
    this.guesses = 0;
    this.won = false;

    return (guess) => {
        if (this.won) return 'The game is over, you already won!'

        this.guesses += 1;

        if(!guess){
            return 'You need to guess';
        }

        if(guess == this.answer){
            this.won = !this.won;
            return (`You win! You found ${this.answer} in ${this.guesses} guesses.`);
        } else if (guess < this.answer){
            return (`${guess} is too low!`);
        } else if (guess > this.answer){
            return (`${guess} is too high!`);
        }
    }
}

module.exports = { guessingGame };
