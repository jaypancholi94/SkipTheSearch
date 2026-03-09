# Shallow Copy vs. Deep Copy

Ever wondered how to clone objects in JavaScript without pulling your hair out? 🤔 Well, you're in luck! Today, we’re unpacking the quirks of shallow and deep copying. Buckle up as we explore these essential techniques to avoid the dreaded “unexpected mutation” fiasco! 🚀

## Shallow Copy: The Surface Dweller 🏄‍♂️ {#shallow-copy}

A shallow copy is like that friend who only skims the headlines and thinks they know everything. It copies only the top-level elements of an object, leaving nested objects to fend for themselves.

```js
const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
}

const shallowCopy = { ...original }

shallowCopy.name = "Bob" //Changes only the shallowCopy
shallowCopy.address.city = "New York" // Changes both original and shallowCopy

console.log(original.name) // Alice (unchanged)
console.log(original.address.city) // New York (changed)
```

😱 Wait, what just happened? You changed `shallowCopy.address.city`, and BAM, `original.address.city` is also changed. Because our friend shallow copy here just copied the reference to `address`. It's like moving out but keeping the keys to your old place. 🏠🔑

### Methods for Shallow Copy

- Spread operator (`...`) – the cool kid 😎
- `Object.assign()` – the classic gentleman 🎩
- `Array.prototype.slice()` for arrays – the slicer 🍕
- `Array.from()` for arrays – the formal inviter 📧

## Deep Copy: The Deep Diver 🏊‍♀️ {#deep-copy}

Now, let’s talk about deep copy, the one who actually reads the whole article (or object) and makes a complete, independent copy of everything. Nested objects? No problem. Deep copy has got it all covered.

```js
const original = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
  },
}

const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.name = "Bob"
deepCopy.address.city = "New York"

console.log(original.name) // Alice (unchanged)
console.log(original.address.city) // Wonderland (unchanged)
```

🥳 Now that’s more like it! `deepCopy` changes do not affect the original object at all. It’s like moving to a new house and actually handing over your old keys. 🏡🚪

### Methods for Deep Copy

- `JSON.parse(JSON.stringify())` – the fast but sometimes flaky friend 🚀 (note: doesn’t handle functions, `undefined`, or other non-serializable values)
- Libraries like Lodash (`_.cloneDeep()`) – the reliable and trustworthy buddy 🤝
- Custom recursive function – the DIY enthusiast 🛠️

## When to Use Which?

- **Shallow Copy**: Use this when you’re in a hurry and just need a quick clone of the top-level properties. Perfect for those “quick fixes” that always turn into “long-term problems” later. 😅
- **Deep Copy**: When you need a complete, independent replica, deep copy is your go-to. Ideal for when you don’t want your changes to mess with the original data, especially for complex objects.

## 🚀 Pro Tip

🚨 Be cautious with `JSON.parse(JSON.stringify())` for large or complex objects. It can be inefficient and sometimes just plain quirky, especially with special object types like `Date`, `Map`, `Set`, and custom objects. 🧙‍♂️
