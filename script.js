// 1.

class BankAccount {
  constructor(accountHolder) {
    this.accountHolder = accountHolder;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      return "Not enough amount";
    }
  }

  getBalance() {
    return `${this.accountHolder}'s current balance: ${this.balance}`;
  }
}

const david = new BankAccount("David");
david.deposit(500);
david.withdraw(200);
console.log(david.getBalance());

// 2.

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
  }

  getInfo() {
    if (this.isRead) {
      return `${this.title} written by ${this.author} with pages ${this.pages} is read`;
    } else {
      return `${this.title} written by ${this.author} with pages ${this.pages} is not read`;
    }
  }
}

const book1 = new Book("1984", "George Orwell", 328);
const book2 = new Book("Jane Eyre", "Charlotee Brontë", 290);

book1.read();

console.log(book1.getInfo());
console.log(book2.getInfo());

// 3.

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.energy = 100;
    this.hunger = 0;
  }

  play() {
    this.energy -= 20;
    this.hunger += 15;
  }

  eat() {
    this.hunger -= 30;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    this.energy += 10;
    if (this.energy > 100) {
      this.energy = 100;
    }
  }

  sleep() {
    this.energy += 50;
    if (this.energy > 100) {
      this.energy = 100;
    }
  }

  getStatus() {
    return `Pet ${this.name} which is ${this.type} has energy score: ${this.energy} and hunger score: ${this.hunger}`;
  }
}

const pet = new Pet("Oreo", "rabbit");

pet.play();
pet.play();
pet.play();
pet.eat();
pet.sleep();

console.log(pet.getStatus());
