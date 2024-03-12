class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
    
    speak(): string {
      throw new Error('This method must be implemented in subclass');
    }
  }
  
  class Dog extends Animal {
    speak(): string {
      return `${this.name} says woof!`;
    }
  }
  
  const myDog = new Dog('Puppy');
  console.log(myDog.speak());
  