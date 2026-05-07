// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// Problem 2

function reverseString(string: string): string {
  return string.split("").reverse().join("");
}

// Problem 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// Problem 4

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return [...new Set(arr1.filter((num) => arr2.includes(num)))];
}
