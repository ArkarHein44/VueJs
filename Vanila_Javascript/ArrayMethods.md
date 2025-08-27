# JavaScript Array Methods Cheat Sheet

## 📌 Array Higher-Order Methods

### 1. filter() - Selection/Filtering
```javascript
// Syntax
const newArray = array.filter(callback(element[, index[, array]])[, thisArg])

// Return: New Array (မူရင်း array မပြောင်းလဲပါ)
```
**အသုံးပြုပုံ**: Condition အရ element တွေကို ရွေးချယ်ဖို့

```javascript
// Example: Even numbers only
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (မူရင်း array မပြောင်း)
```

---

### 2. reduce() - Accumulation/Transformation
```javascript
// Syntax
const result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

// Return: Any data type (array, object, number, string, etc.)
```
**အသုံးပြုပုံ**: Array ကို single value အဖြစ် ပြောင်းဖို့

```javascript
// Example: Sum of numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15 (number return)
console.log(numbers); // [1, 2, 3, 4, 5] (မူရင်း array မပြောင်း)

// Example: Object return
const people = [{name: 'Alice'}, {name: 'Bob'}];
const names = people.reduce((acc, person) => {
  acc[person.name] = true;
  return acc;
}, {});
console.log(names); // {Alice: true, Bob: true} (object return)
```

---

### 3. map() - Transformation
```javascript
// Syntax
const newArray = array.map(callback(element[, index[, array]])[, thisArg])

// Return: New Array (မူရင်း array မပြောင်းလဲပါ)
```
**အသုံးပြုပုံ**: Each element ကို transform လုပ်ဖို့

```javascript
// Example: Double each number
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10] (new array return)
console.log(numbers); // [1, 2, 3, 4, 5] (မူရင်း array မပြောင်း)
```

---

### 4. forEach() - Iteration
```javascript
// Syntax
array.forEach(callback(element[, index[, array]])[, thisArg])

// Return: undefined (ဘာမှ return မပြန်ပါ)
```
**အသုံးပြုပုံ**: Each element အတွက် operation လုပ်ဖို့

```javascript
// Example: Log each element
const numbers = [1, 2, 3];
const result = numbers.forEach(n => console.log(n));
console.log(result); // undefined
console.log(numbers); // [1, 2, 3] (မူရင်း array မပြောင်း)
// Console output: 1, 2, 3
```

---

### 5. find() - Search
```javascript
// Syntax
const element = array.find(callback(element[, index[, array]])[, thisArg])

// Return: Found element OR undefined
```
**အသုံးပြုပုံ**: Condition match ဖြစ်တဲ့ first element ကိုရှာဖို့

```javascript
// Example: Find first even number
const numbers = [1, 3, 4, 5, 6];
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 4 (element return)
console.log(numbers); // [1, 3, 4, 5, 6] (မူရင်း array မပြောင်း)

// Example: Not found case
const notFound = numbers.find(n => n > 10);
console.log(notFound); // undefined
```

---

## 🔄 Method Chaining Example
```javascript
const users = [
  { name: 'Alice', age: 25, active: true },
  { name: 'Bob', age: 17, active: true },
  { name: 'Charlie', age: 30, active: false }
];

// Method chaining - return types အမျိုးမျိုး
const activeAdults = users
  .filter(user => user.active)      // array return
  .filter(user => user.age >= 18)   // array return
  .map(user => user.name);          // array return

console.log(activeAdults); // ['Alice'] (array return)
```

---

## 📊 Comparison Table

| Method | Return Type | Mutates Original | Purpose |
|--------|-------------|------------------|---------|
| **filter()** | New Array | ❌ | Condition အရ element တွေရွေးတယ် |
| **reduce()** | Any Type | ❌ | Array ကို single value အဖြစ်ပြောင်းတယ် |
| **map()** | New Array | ❌ | Each element ကိုပြောင်းတယ် |
| **forEach()** | undefined | ❌ | Each element အတွက် operation လုပ်တယ် |
| **find()** | Element/undefined | ❌ | Condition match ဖြစ်တဲ့ first element ရှာတယ် |

---

## 💡 အရေးကြီး Tips
1. **reduce() မှာ initial value အမြဲပေးပါ** - Error ကင်းစေဖို့
2. **Method chaining** လုပ်လို့ရတယ် - return type ကိုသိရင် chain လုပ်လို့ရတယ်
3. **Original array ကိုဘယ်တော့မှမပြောင်းဘူး** - Immutable operations တွေဖြစ်တယ်
4. **Arrow functions** သုံးရင်ပိုရေးကောင်းတယ် - Syntax ပိုတိုတယ်

```javascript
// Good practice - reduce() with initial value
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0); // ✅ initial value ပေးထား

// Bad practice - reduce() without initial value
const sumBad = numbers.reduce((acc, num) => acc + num); // ❌ initial value မပေးထား
```

---

## 🚀 Real-world Use Cases
- **filter()**: Search results, category filtering (array return)
- **reduce()**: Shopping cart total (number return), data grouping (object return)
- **map()**: Data transformation (array return), API response formatting
- **forEach()**: DOM manipulation, logging (undefined return)
- **find()**: User authentication (object return), data retrieval
