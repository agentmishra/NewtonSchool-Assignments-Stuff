1. the primitive datatypes in js are 
  a>String-represents sequence of characters e.g. "hello"
  b>Number	represents numeric values e.g. 100
  c>Boolean-represents boolean value either false or true
  d>Undefined-represents undefined value
  e>Null-represents null i.e. no value at all.

2. 
    a> Undeclared - A variable is undeclared if it has not been declared with an appropriate keyword (i.e. var, let or const). Accessing an undeclared variable will throw a ReferenceError.
console.log(x); // ReferenceError: x is not defined
    b> Undefined - A variable is undefined if it hasn't been assigned a value. undefined is a primitive data type in JavaScript and represents the absence of a value, intentional or otherwise.
let x;
console.log(x); // undefined
   c> Null - A variable is assigned a value of null like any other value. null is also primitive data type in JavaScript and always represents the intentional absence of a value.
let x = null;
console.log(x); // null

3. Difference between JavaScript While and Do While loop with example?. Though Do While loop and While loop looks similar, they differ in their execution.
>In While loop, the condition tested at the beginning of the loop, and if the condition is True, statements inside the loop will execute. It means the While loop executes the code block only if the condition is True.
>At the end of the loop, the Do While loop tests the condition. So, Do While executes the statements in the code block at least once even if the condition Fails.

4. for loop, for..in, for each..in, map, reduce etc. 

5. The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: resolve , which must be called when the Promise is resolved (passing a result), and reject , when it is rejected (passing an error).

6. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. ... The first is the anonymous function with lexical scope enclosed within the Grouping Operator () . This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

7. Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future. Inside the Event Handling Function.

8. The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used: In a method, this refers to the owner object. Alone, this refers to the global object.
a. ES6 allows you to use arrow functions which uses the enclosing lexical scope.

9. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date. ... Array objects inherit from Array.

10. A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

11. 
i)The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.
ii) The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
That's something you can't do with forEach() because, as you might guess, it returns undefined.
iii) forEach() does not mutate the array on which it is called. (However, callback may do so).
map() does not mutate the array on which it is called (although callback, if invoked, may do so).

12.  Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

13. Native objects are objects that adhere to the specs, i.e. "standard objects". Host objects are objects that the browser (or other runtime environment like Node) provides.

14. function Person(){} is just a normal function declaration. The convention is to use PascalCase for functions that are intended to be used as constructors. var person = Person() invokes the Person as a function, and not as a constructor.

15. The function's name ( foo ) is added to the enclosing scope (technically, the variable object for the execution context the function is defined in). ... var foo = function() { // ... }; Function expressions are evaluated as part of the step-by-step code, at the point where they appear (just like any other expression).

16. The difference is that call() takes the function arguments separately, and apply() takes the function arguments in an array. CALL : A function with argument provide individually. If you know the arguments to be passed or there are no argument to pass you can use call.

17. The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

18. 
> Feature Detection
Feature detection is just a way of determining if a feature exists in certain browsers. A good example is a modern HTML5 feature ‘Location’.
if (navigator.geolocation) {
// detect users location here B-) and do something awesome
}
> Feature Inference
Feature Inference is when you have determined a feature exists and assumed the next web technology feature you are implementing unto your app exists as well. Its usually bad practice to assume, so its better to explicitly specify features you want to detect and plan a fallback action.
> UA String
UA String or User Agent String is a string text of data that each browsers send and can be access via navigator.userAgent. These “string text of data” contains information of the browser environment you are targeting.
If you open your console and run
navigator.userAgent

19. JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

20. Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object (Provided the handler is initialized).

21. In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements. Events trickle down in event capturing. Capturing happens before bubbling.

22. An attribute is a quality or character ascribed to or considered to belong to, or be inherent in, a person or thing. A property is a quality or characteristic belonging to a person or thing, with its original use implying ownership, and also either being essential or special.

23. Extending a built-in/native JavaScript object means adding properties/functions to its prototype. While this may seem like a good idea at first, it is dangerous in practice. Imagine your code uses a few libraries that both extend the Array.prototype by adding the same contains method, the implementations will overwrite each other and your code will break if the behavior of these two methods is not the same.
The only time you may want to extend a native object is when you want to create a polyfill, essentially providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser.

24. = is used for assigning values to a variable in JavaScript. == is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

25. The same-origin policy is a critical security mechanism that restricts how a document or script loaded by one origin can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors.

26. The name ternary refers to the fact that the operator takes three operands. The condition is a boolean expression that evaluates to either true or false

27. what are the advantages and disadvantages to using it? If you put "use strict"; at the top of your code (or function), then the JS is evaluated in strict mode. Strict mode throws more errors and disables some features in an effort to make your code more robust, readable, and accurate

28. 
Advantages:
Fixes some of the longstanding problems in JavaScript and discourages JavaScript anti-patterns.
Enables you to write shorter code, by providing some syntactic sugar on top of JavaScript, which I think ES5 lacks, but ES2015 is awesome.
Static types are awesome (in the case of TypeScript) for large projects that need to be maintained over time.
Disadvantages:
Require a build/compile process as browsers only run JavaScript and your code will need to be compiled into JavaScript before being served to browsers.
Debugging can be a pain if your source maps do not map nicely to your pre-compiled source.
Most developers are not familiar with these languages and will need to learn it. There's a ramp up cost involved for your team if you use it for your projects.
Smaller community (depends on the language), which means resources, tutorials, libraries, and tooling would be harder to find.
IDE/editor support might be lacking.
These languages will always be behind the latest JavaScript standard.
Developers should be cognizant of what their code is being compiled to — because that is what would actually be running, and that is what matters in the end.

29. chrome or mozilla - developer tools

30. mutable objects can change their state or contents and immutable objects can't change their state or content. Immutable Objects : These are of in-built types like int, float, bool, string, unicode, tuple. In simple words, an immutable object can't be changed after it is created.
a. The object being frozen is said to be immutable because the entire object state (values and references to other objects) within the whole object is fixed. Note that strings, numbers, and booleans are always immutable and that Functions and Arrays are objects.
b. Immutable objects are good for sharing information between threads in a multi-threaded environment since they don't need to be synchronized. Operations on immutable objects return new immutable objects while operations that cause side-effects on mutable objects usually return void 
c. Mutable objects are those whose state is allowed to change over time. An immutable value is the exact opposite — after it has been created, it can never change. Strings and Numbers are inherently immutable in javascript.

31. In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, you can move to another task before the previous one finishes

32. JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. 
a. CallStack is a data structure which keeps track of function calls in our program. ... It has responsibility to see weather the call-stack is empty and does the task queue contains pending task to process. If the call-stack is empty, it will push the task to the call-stack from the queue and the task gets processed.

33. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

34. 
ES5 function constructors - This also uses a new operator for object creation but focuses on how the objects are being instantiated.
ES6 class constructors - This can be said to be a syntax base for constructor functions and instantiate objects using a new operator.

35. yes. It’s much shorter

36. Arrow syntax binds this to the surrounding code which makes the code simpler and shorter.

37. A higher order function is a function that takes a function as an argument, or returns a function 

38. The destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

39. Template literals are literals delimited with backticks ( ` ), allowing embedded expressions called substitutions.

40. Curry functions are neat when used to carry containers of reusable code. Basically you take a function with multiple arguments and you know that one of those arguments will have specific value but the other is undecided.

41. Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
Whereas, Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

42. To share code between components, create an ES6 module in a service component and export the variables or functions that you want to share using standard JavaScript syntax. An ES6 module is a JavaScript file that explicitly exports variables or functions that other modules can use.

43. The advantage of using a static class is that the compiler can check to make sure that no instance members are accidentally added. The compiler will guarantee that instances of this class cannot be created. Static classes are sealed and therefore cannot be inherited. They cannot inherit from any class except Object.
