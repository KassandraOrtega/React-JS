# React-JS
## Learn Modern JavaScript
### Variable Declarations
#### Variable Declarations(var vs let vs const)
Var
- can be hoisted
- function scoped
- undefined when accessing a variable before it’s declared
Let
- block scoped {}
- reference error when accessing a variance before its declared
Const
- Block scoped
- can not be reassigned or changed

### Destructuring
#### Object and Array Destructuring
- If you wanted to add multiple properties to an object at the same time, you would need to use JavaScript’s “object literal notation” when you initialize the object.
- There’s a way to add properties one at a time, extract properties one at a time, add multiple properties at the same time, but unfortunately, there’s no comparable way to extract multiple properties from an object at the same time. That is, until “destructuring” was introduced in ES2015. Destructuring allows us to extract multiple properties from an object. This can drastically decrease the amount of code we need to write when we want to extract data from an object.
- We can have the property names on the left of the colon and the new variable names on the right.

 
### Shorthand Syntax
#### Shorthand Properties and Method Names
- When keys are the exact same as their values, you can remove the key.
- When calling a function in an object, you can omit the term function to make it more concise.

### Computer Property Names
#### Computed Property Names
- Allows you to have an expression be computed as a property name on an object.

### Template Literals
#### Template Literals
- Make concatenation a little easier.

### Arrow Functions
#### Arrow Functions
Provide two main benefits over regular functions.
- They’re more terse.
- Make managing the “this” keyword a little easier.

### Default Parameters
3### Default Parameters
- When writing a function, you need to assign default values for arguments that weren’t passed to the function when it was invoked.

### Compiling vs Polyfills
3### Compiling vs Polyfills with Babel
- The purpose of Babel is to take your code which uses new features that browsers may not support yet, and transform it into code that any browser you care about can understand.

### Async JavaScipt
#### Callbacks, Promises, Async/Await
- BerkshireHathaway.com
Callbacks:
- Data fetching patterns, Callbacks
- Any function that receives another function as its argument is called a higher order function.
- The function that you are passing in as the argument is called a Callback function.
Promises and their status of an asynchronous request:
- Pending: The default, initial state.
- Fulfilled: When complete/ready.
- Rejected: When something goes wrong
- Promises exist to m make the complexity of making asynchronous requests more manageable. 

### Classes
#### Guide to JavaScript’s prototype (and ES6 Classes)
- Object.create has inheritance.
- A prototype is a property on a function.
- Sharing methods between instances of a Class
- Arrow functions don’t have a prototype ability

### JavaScript Modules
#### From IIFEs to CommonJS to ES6 Modules
Modularity
- Reusability
- Composability
- Leverage
- Isolation
- Organization
We should design our software separated into different pieces where each piece has a specific purpose and clear boundaries for how it interacts with other pieces. In software, these pieces are called modules.
Modules contain:
- Imports(dependencies)
- Code
- Exports
IF-EE Module pattern
- An anonymous function expression that we are invoking immediately.
- Order of the script tags matter.
Module Standards
- File based
- Explicit imports
- Explicit exports
CommonJS
- The commonJS group defined a module format to solve JavaScript scope issues by making sure each module is executed in its own namespace. This is achieved by forcing modules to explicitly export those variables it wants to expose to the “universe”, and also by defining those other modules required to properly work. 
- Prose
    - Node
- Cons
    - Browsers
    - Synchronous
ES Modules
- Support Async
    - “Import”
    - “Export”

### Class Fields
#### Private and Public Class Fields
- # can be used to make private
