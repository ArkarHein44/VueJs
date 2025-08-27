JavaScript မှာ `filter()` နဲ့ `reduce()` တို့လို method တွေက **Array Higher-Order Methods** တွေဖြစ်ပါတယ်။

## 1. Higher-Order Functions (HOFs)

ဒီ method တွေက **Higher-Order Functions** တွေဖြစ်ပါတယ်။

### Higher-Order Function ဆိုတာ
- Function တွေကို **parameter အဖြစ်လက်ခံတဲ့ function** (ကိုယ်တိုင်လည်း function ဖြစ်)
- **Function တွေကို return ပြန်တဲ့ function**

```javascript
// Higher-Order Function ဥပမာ
function higherOrderFunction(callback) {
    return callback(); // function ကို return ပြန်တယ်
}
```

## 2. Array Iteration Methods

ဒီ method တွေက **Array Prototype Methods** တွေဖြစ်ပြီး array တွေကို iterate လုပ်ဖို့သုံးပါတယ်။

### အဓိက Array Iteration Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. filter() - Condition အရ selection
const evens = numbers.filter(n => n % 2 === 0);

// 2. reduce() - Accumulation/Transformation
const sum = numbers.reduce((acc, n) => acc + n, 0);

// 3. map() - Transformation
const doubled = numbers.map(n => n * 2);

// 4. forEach() - Side effects
numbers.forEach(n => console.log(n));

// 5. find() - Search
const found = numbers.find(n => n > 3);
```

## 3. Functional Programming Methods

ဒီ method တွေက **Functional Programming Paradigm** ရဲ့ အခြေခံသဘောတရားတွေကိုလိုက်နာပါတယ်။

### Functional Programming Features
- **Immutability** - Original array ကိုမပြောင်းဘူး
- **Pure Functions** - Same input, same output
- **No Side Effects** - External state ကိုမပြောင်းဘူး

```javascript
const original = [1, 2, 3, 4, 5];

// filter() - new array return, original မပြောင်းဘူး
const filtered = original.filter(n => n > 3);
console.log(original); // [1, 2, 3, 4, 5] (မပြောင်းဘူး)
console.log(filtered); // [4, 5]

// reduce() - new value return, original မပြောင်းဘူး
const sum = original.reduce((acc, n) => acc + n, 0);
console.log(original); // [1, 2, 3, 4, 5] (မပြောင်းဘူး)
console.log(sum); // 15
```

## 4. Callback-based Methods

ဒီ method တွေက **callback functions** တွေကိုလက်ခံပါတယ်။

### Callback Structure
```javascript
array.method(callbackFunction, thisArg)

// Callback function parameters
function callback(element, index, array) {
    // logic here
}
```

## Method အမျိုးအစားဇယား

| Method | Category | Return Type | Purpose |
|--------|----------|-------------|---------|
| **filter()** | Selection | New Array | Condition match ဖြစ်တဲ့ elements တွေကိုရွေးတယ် |
| **reduce()** | Accumulation | Any Type | Array ကို single value အဖြစ်ပြောင်းတယ် |
| **map()** | Transformation | New Array | Each element ကိုပြောင်းပြီး new array return |
| **forEach()** | Iteration | undefined | Each element အတွက် operation လုပ်တယ် |
| **find()** | Search | Element | Condition match ဖြစ်တဲ့ first element ကိုရှာတယ် |

## Real-world Examples

### 1. E-commerce
```javascript
const products = [
    { id: 1, name: 'Laptop', price: 1000, category: 'electronics' },
    { id: 2, name: 'T-shirt', price: 20, category: 'clothing' },
    { id: 3, name: 'Phone', price: 500, category: 'electronics' }
];

// filter() - Electronics products only
const electronics = products.filter(p => p.category === 'electronics');

// reduce() - Total value of electronics
const totalValue = electronics.reduce((sum, product) => sum + product.price, 0);
```

### 2. Data Processing
```javascript
const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: true },
    { name: 'Charlie', age: 30, active: false }
];

// Chaining methods
const activeAdults = users
    .filter(user => user.active) // active users only
    .filter(user => user.age >= 18) // adults only
    .map(user => user.name); // get names only

console.log(activeAdults); // ['Alice']
```

## **အချုပ်ပြောရရင်**

`filter()` နဲ့ `reduce()` တို့က：
- **Array Higher-Order Methods**
- **Functional Programming Approach** သုံးတယ်
- **Immutable** - Original array ကိုမပြောင်းဘူး
- **Callback-based** - Functions တွေကို parameters အဖြစ်လက်ခံတယ်
- **Modern JavaScript** ရဲ့အရေးကြီးတဲ့ features တွေဖြစ်တယ်

ဒီ method တွေသုံးပြီး clean, readable, and maintainable code တွေရေးလို့ရပါတယ်။