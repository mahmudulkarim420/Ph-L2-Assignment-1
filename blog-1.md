# Why `any` is Dangerous and `unknown` is Safer in TypeScript

## Introduction

TypeScript provides powerful type safety, but using the wrong types can break that safety. One of the most controversial types is `any`, often referred to as a **"type safety hole"**. On the other hand, `unknown` is a safer alternative when dealing with uncertain data.

In this blog, we will explore why `any` is risky, why `unknown` is better, and how **type narrowing** helps ensure safe code.

---

## The Problem with `any`

The `any` type disables TypeScript's type checking completely.

```ts
let value: any = "Hello";
value = 42;
value.toUpperCase(); 
```

### Why is this dangerous?

* No type checking 
* No IntelliSense 
* Runtime errors may happen

In this case, TypeScript can no longer protect you from mistakes.

---

## Why `unknown` is Safer

The `unknown` type forces you to check the type before using it.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### Benefits of `unknown`

* Type-safe 
* Forces validation 
* Prevents runtime errors 

---

## What is Type Narrowing?

**Type narrowing** means reducing a variable’s type to a more specific type using checks.

### Example:

```ts
function printLength(value: unknown) {
  if (typeof value === "string") {
    return value.length;
  }
  return 0;
}
```

Here:

* `value` starts as `unknown`
* After checking → becomes `string`

---

## Common Narrowing Techniques

### 1. typeof

```ts
if (typeof value === "number") {}
```

### 2. instanceof

```ts
if (value instanceof Date) {}
```

### 3. Custom Type Guards

```ts
function isString(val: unknown): val is string {
  return typeof val === "string";
}
```

---

## Conclusion

* `any` removes type safety → avoid it 
* `unknown` enforces checks → use it instead 
* Type narrowing ensures safe operations

Always prefer **safe typing over convenience** in TypeScript.

---

**Note:**
Using `unknown` instead of `any` helps maintain type safety and reduces unexpected errors in TypeScript applications.