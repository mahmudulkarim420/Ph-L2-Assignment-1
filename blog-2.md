# How Generics Make TypeScript Code Reusable and Type-Safe

## Introduction

Generics are one of the most powerful features in TypeScript. They allow you to write reusable and flexible code while still maintaining strong type safety.

In this blog, we will explore how generics work and why they are essential for scalable applications.

---

## What are Generics?

Generics allow you to create functions, classes, and interfaces that work with multiple types.

### Basic Example

```ts
function identity<T>(value: T): T {
  return value;
}
```

Now you can use it with any type:

```ts
identity<string>("Hello");
identity<number>(42);
```

---

## Why Not Use `any`?

```ts
function identity(value: any): any {
  return value;
}
```

Problem:

* No type safety
* You lose type information

---

## Benefits of Generics

### 1. Reusability

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

Works with:

* numbers
* strings
* objects

---

### 2. Type Safety

```ts
const num = getFirst<number>([1, 2, 3]); 
```

Type is preserved automatically

---

### 3. Better IntelliSense

Editors can understand your data type and give suggestions.

---

## Generics with Constraints

You can restrict types using constraints.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

Ensures:

* Key must exist in object
* Prevents runtime errors

---

## Real-World Use Case

```ts
interface User {
  id: number;
  name: string;
}

function getUserProperty<T, K extends keyof T>(user: T, key: K) {
  return user[key];
}
```

---

## Conclusion

* Generics make code reusable 
* They maintain type safety 
* They improve developer experience 

Generics are essential for writing scalable TypeScript applications.

---

**Note:**
Learn generics deeply — they will level up your TypeScript skills significantly.
