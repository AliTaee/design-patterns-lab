# Design patterns lab 🧪

Leaning and practicing design patterns by small to medium code examples

## How to run code examples?

On each pattern, there is a README file which contains a list of code examples.
If it's just one pure JS file, then you can run it with Node.js by typing
`node design-pattern-folder/file-name.js`

And if we are using that pattern on react code example then you can open
`src/index.jsx` and change the `App` import path to react code pattern example
you like to see in action.

## List of Js patterns

### Factory pattern 🏭

With the factory pattern we can use factory functions in order to create new objects. A function is a factory function when it returns a new object without the use of the new keyword!
The factory pattern is useful when we have to create multiple smaller objects that share the same properties. A factory function can easily return a custom object depending on the current environment, or user-specific configuration.

Source: [www.patterns.dev/vanilla/factory-pattern](https://www.patterns.dev/vanilla/factory-pattern)

You can find the code examples here: `js/factory/`

### observer pattern 👂

With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

Source: [www.patterns.dev/vanilla/factory-pattern](https://www.patterns.dev/vanilla/factory-pattern)

You can find the code examples here: `js/observer`
