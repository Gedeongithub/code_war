
class Guesser {
    constructor(number, lives) {
      this.number = number; 
      this.lives = lives; 
    }
  
    guess(n) {
      if (this.lives <= 0) {
        throw new Error("No more guesses left! Game Over.");
      }
  
      if (n === this.number) {
        return true;
      } else {
        this.lives--; 
        return false;
      }
    }
  }
  