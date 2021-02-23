# React-JS
## Learn Advanced JavaScript
### Execution Contexts
#### Guide to Execution Contexts, Hoisting, Scopes, and Closures
When global execution context is created:
- Create a global object.
- Create an object called “this”.
- Set up memory space for variables and functions.
- Assign variable declarations a default value of “undefined” while placing and function declarations in memory.
When function execution context is created:
- Create an arguments object.
- Create an object called “this”.
- Set up memory space for variables and functions.
- Assign variable declarations a default value of “undefined” while placing and function declarations in memory.
Scope:
- The current context of execution.
Closure Scope:
- The concept if a child function “closing” over the variable environment of its parent function is called Closures.
Hoisting
- This process of assigning variable declarations a default value of undefined during the creation phase.

### The this keyword
#### Understanding the this keyword, call, apply, and bind
Implicit Binding:
- Look to the left of the dot at call time.
Explicit Binding:
- Tells a function what the context of the this keyword is going to be using call, apply, or bind.
New Binding:
- When every other function invoke with the new keyword, the this keyword is bound to the new object being constructed.
Window Binding:
- Where if none of these rules apply, then the this keyword is going to default to the window object unless you’re in strict mode, then it’s just going to be undefined.

### The Event Loop
#### The JavaScript Event Loop - A Simple Guide
Call Stack:
- A data structure which records basically where in the program we are, if we step into a function, we put something on to the stack, if we return from a function, we pop off the top of the stack.

### Async JavaScript
The Evolution of Async JavaScript -  From Callbacks, to Promises, to Async/Await
- Any function that receives another function as its argument is called a higher-order function
- The function that you are passing in as the argument is called a callback function.

### JavaScript’s Prototype
#### Beginner’s Guide to JavaScript Prototype
- Object.create has inheritance.
- A prototype is a property on a function.
- Sharing methods between instances of a Class
- Arrow functions don’t have a prototype ability

### Class Fields
#### JavaScript Private and Public Class Fields
- "#" can be used to make private
	
### Inheritance
#### JavaScript Inheritance and the Prototype Chain

### JavaScript Modules
#### From IIFEs to CommonJS to ES6 Modules

### Bonus Time
#### JavaScript Composition vs Inheritance
#### JavaScript Array Methods you should know
.concat
- Used to merge two or more arrays. What’s nice about concat is it doesn’t mutate the original array but instead returns a new array.
.every
- Used to determine if every element in an array passes a test specified by a given function. The function passed to every gets invoked once for each element in the array. As soon as that function returns a falsy value, every will stop executing and return false. If the function passed to every never returns a falsy value, then every will return true.
.fill
- Defined, fill “fills all the elements of an array from a start index to an end index with a static value”.
.filter
- Creates a new array after filtering out elements that don’t pass a test specified by a given function.
.find
- Allows you to find the first element in an array which satisfies a test specified by a given function.
.findIndex
- Similar to .find, but instead of returning the element, it returns the index where the element is located.
.forEach
- Invokes a provided function once for each item in the array. Note .forEach is similar to .map except .map returns a new array, .forEach has no return value. Generally, you can use forEach as a replacement for a for loop.
.from
- .from isn’t an array method on Array.prototype but instead is a static method on the Array class. So you access it with Array.from().
- .from is used to create a new array from an “array-like” or iterable object.
- The most common use case where you see an “array-like” object is with the “arguments” keyword inside of a function.
.includes
- Determines if a particular value is found in an array. Note: We used to use indexOf for this same behavior but as of ES6, includes is more intuitive.
.indexOf
- Returns the index of a particular value. If that value doesn’t exist in the array, it returns -1.
.join
- Turns (or joins) all elements of an array into a string and returns it. By default, when converted into a string, each item in the array will be separated by a comma. You can change that by passing in a custom separator as the first argument.
.map
- Creates a new array with the result of calling a provided function on every element in the original array. When should you use .map? I use it when I need to create a new array, based on a previous array. 
.pop
- Removes the last element from an array and returns it. 
.push
- Adds an item to the end of the array and returns the array’s new length. 
.reduce
- .reduce holds the keys to the universe. If you master it, you’ll be able to do pretty much anything you want with arrays. Before you even look at the API, it’s important to understand why .reduce exists. The idea of .reduce is that you can take an array and transform it into anything else - another array, an object, an integer, literally anything. Why would you ever want to do that? Look at every single example on this whole page. In each one, we’re taking an array and transforming it in some way - mostly to another array.
.reverse
- Reverses the order of an array. It’s important to remember that this method mutates the original array.
.shift
- Removes the first element from an array and returns it.
.slice
- Allows you to create a new array from a portion of an existing array. It also doesn’t modify the original array.
- .slice takes two arguments. The first argument is the index of the beginning item you want to grab in the array and the second argument is the index of the end item you want to grab in the array, not inclusive. So for example, if you do .slice(1,4), the array that is returned will have whatever elements were in the 1st, 2nd, 3rd index in the original array, not the 4th.
.some
- Used to determine if any element in an array passes a test specified by a given function. The function passed to some gets invoked once for each element in the array. As soon as that function returns a truthy value, some will stop executing and return true. If the function passed to some never returns a truthy value, then some will return false.
.sort
- Allows you to sort the elements of an array. This one is more complex than I’d like it to be. Here’s my rule of thumb that works _most of the time_™. If what you’re sorting is based on string values, you can call .sort() and you’d get what you’d expect.
.splice
- Allows you to add and or remove items from anywhere inside of an array. It’s mutative so favor using another method that isn’t mutative like .slice, .map, .filter or the spread operator.
- The API is a bit funky as well. The first argument specifies where to start, the second argument specifies how many elements to remove, and the third argument specifies what to add.
.unshift
- Adds one or more elements to the beginning of an array and returns the array’s new length.
#### Creating your own JavaScript Array
