// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((a, b) => a + b, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if((this.array[0] + this.array[1]) > this.array[2] && 
        (this.array[0] + this.array[2]) > this.array[1] &&
        (this.array[1] + this.array[2]) > this.array[0]) {
          return true;
        }

    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    for(let i = 0; i < (this.array.length - 1); i++) {
      if(this.array[i] !== this.array[i + 1]){
        return false;
      }
    }
    return true;
  }

  get area() {
    return Math.pow(this.array[0], 2)
  }
}