class Queue {
    constructor() {
      this.array = {};
      this.front = 0;
      this.back = 0;
    }
    push(val) {
      this.array[this.back] = val;
      this.back = this.back + 1;
    }
    pop() {
      if (Object.keys(this.array).length === 0) {
        console.log('Choose color');
      } else {
        delete this.array[this.front];
        this.front = this.front + 1;
      }
    }
  }
  
  export const strBreak = (inputString, maxCharactersPerLine) => {
    var words = inputString.split(' ');
    var lines = [];
    var currentLine = '';
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      if (currentLine.length + word.length <= maxCharactersPerLine) {
        currentLine += word + ' ';
      } else {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      }
    }
  
    lines.push(currentLine.trim());
  
    return lines;
  };
  
  export const drawRect = (x, y, width, height, radius, bgColor, ctx) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.stroke();
  };
  
  export default Queue;
  