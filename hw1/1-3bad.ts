class LowCohesion {
  constructor() {}

  stringManipulation(text: string): string {
    return text.toUpperCase();
  }

  randomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  addNums(num1: number, num2: number): number {
    return num1 + num2;
  }
}

const utils = new LowCohesion();
console.log(utils.stringManipulation("hello"));
console.log(utils.randomBoolean());
console.log(utils.addNums(5, 3));
