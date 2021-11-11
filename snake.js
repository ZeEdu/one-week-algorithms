class Snake {
  constructor() {
    this.snakebody = [[4, 1], [4, 2], [4, 3], [4, 4]];
  }


  play() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEnconding("utf8");
    stdin.on("data", keypress => {
      if (keypress === 'w') this.move('up');
      if (keypress === 'a') this.move('left');
      if (keypress === 's') this.move('down');
      if (keypress === 'd') this.move('right');

      if (keypress === '\u0003') process.exit();
      this.draw();
    })
  }

  /**
   * @param {"up"|"down"|"left"|"right"} direction*/
  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    }

    const currentHead = this.snakebody[this.snakebody.length - 1];
    const [currRow, currCol] = currentHead;
    const [changeRow, changeCol] = delta[direction];
    const newHead = [currRow + changeRow, currCol + changeCol];
    this.snakebody.push(newHead)
    this.snakebody.shift();
  }

  draw() {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(" ");
      }
      grid.push(row);
    }
    this.snakebody.forEach(pos => {
      const [row, col] = pos;
      grid[row][col] = "O";
    })
    console.clear();
    grid.forEach(row => console.log(row.join("|")))
  }
}
const game = new Snake();
game.draw();
console.log("----");
game.move("up");
game.draw();
