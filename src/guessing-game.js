class GuessingGame {
  constructor() {
    this.rangeArray = [];
    this.lastGuess = 0;
    this.lastGuessIndex = 0;
  }

  setRange(min, max) {
    this.rangeArray = new Array(max - min)
      .fill(0)
      .map((num, index) => num + (min + index + 1));
  }

  guess() {
    this.lastGuess = Math.floor(
      (this.rangeArray[0] + this.rangeArray[this.rangeArray.length - 1]) / 2
    );
    this.lastGuessIndex = this.rangeArray.indexOf(this.lastGuess);
    return this.lastGuess;
  }

  lower() {
    this.rangeArray = this.rangeArray.slice(0, this.lastGuessIndex + 1);
  }

  greater() {
    this.rangeArray = this.rangeArray.slice(this.lastGuessIndex + 1);
  }
}

module.exports = GuessingGame;
