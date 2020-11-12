# Behavior, Strategy, Implementation

> Be creative while inventing ideas, but be disciplined while implementing them.
> - [Amit Kalantri](https://amitkalantri.com/tag/quotes-about-creativity/)

- Behavior: What does code do? What are it’s arguments and it’s return value? How could you use it in a program? Behavior is checked by tests
- Strategy: How could you transform the arguments to the return value in small steps, focusing on the data not the code. This is the realm of flow charts, diagrams, and pseudocode.
- Implementation: Which language features and which lines of code can you use to make your strategy a reality?

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [About Programming](#about-programming)
- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
- [Class Recordings](#class-recordings)
- [study.hackyourfuture.be](https://study.hackyourfuture.be)
- [home.hackyourfuture.be](https://home.hackyourfuture.be/)

---

## Getting Started

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
    - `$ npm install -g study-lenses` (if you do not have it already)
    - `$ npm update -g study-lenses` (if you already have it installed)
2. Clone this repository
    - `$ git clone git@github.com:HackYourFutureBelgium/behavior-strategy-implementation.git`
3. `cd` into the repository
    - `$ cd behavior-strategy-implementation`
4. Open the repository using `study`
    - `$ study`
5. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#behavior-strategy-implementation)

---

## Study Tips

- Don't rush, understand!  Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples!  Understanding and experimenting with working code is a very effective way to learn programming.
- Write lots of good comments, learn more about this in [./studying-javascript](./studying-javascript)
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer.
- Take a look through the [Learning From Code](https://study.hackyourfuture.be/learning/learning-from-code) guide for more study tips

Not all assignments are created equal. These 3 emoji's will help you figure out how to spend your study time as effectively as possible.

- 🥚 `:egg:` - these assignments are required, they cover the base skills you'll need to move on.
- 🐣 `:hatching_chick:` - do your best to start these exercises. you don't need to finish or master them (yet) but getting the main idea will be helpful in coming weeks
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges!

[TOP](#behavior-strategy-implementation)

---

## Learning Objectives

What can you expect to learn in this module?

<details>
<summary>expand/collapse</summary>

- [Learning from Code](https://study.hackyourfuture.be/learning/learning-from-code)
  - Reading & understanding source code
  - Making small, incremental experiments
  - Copying & modifying others' code
- Using assertion libraries
  - _Failed assertions throw errors!_
  - Deep equality
  - Strict equality
  - Throws
- Using test reporters
  - `describe`
  - `it`
- TDD
  - Trust the tests!
  - Solving challenges one test at a time
- Debugging
  - Stepping through tests in the debugger
  - Reading test results to debug code behavior
  - Interpreting assertion errors

### Isolating JavaScript

- JS Operators
  - Implicit Coercion
  - Operator Precedence
- Control flow
  - `for in`, `for of`
  - `break`, `continue`
- Reference vs. Value
  - Comparing arrays & objects
  - Avoiding side-effects
- Arrays
  - Reading & writing entries
  - Array methods
- Objects
  - Reading and writing entries
  - Dot vs. Bracket access
  - `Object.keys`, `.values`, `.entries`
- Functions
  - The callstack
  - Recursion

### Integrating JavaScript

- Sharing arrays and objects between handler functions by reference

</details>
<br>


[TOP](#behavior-strategy-implementation)

---

## Suggested Study

Helpful resources for this module

<details>
<summary>expand/collapse</summary>
<br>

> [study.hackyourfuture.be/javascript](https://study.hackyourfuture.be/javascript)

### Exercises & Practice

- 🥚,🐣,🐥: [Reading Codewars](https://github.com/HackYourFutureBelgium/reading-codewars) (important!)
- 🥚: [Document and Pass](https://github.com/HackYourFutureBelgium/document-and-pass)
- Study Lense Exercises
  - 🥚: [./isolate](./isolate): Practice core JavaScript without any user input or HTML/CSS
  - 🥚: [./separate](./separate): Learn to divide your project code into separate files and folders for easy collaboration
  - 🐣: [./refactor-and-test](./refactor-and-test): Practice refactoring the logic from user interactions and testing it in isolation
  - 🐣: [./write-tests](./write-tests): Write tests for a working function.  Practice reading code and describing it's _behavior_ with unit tests
  - 🐣: `./function-design`: _coming soon_ Learn a structured approach to understanding and solving coding challenges
  - 🐥: `./using-errors`: _coming soon_
  - 🐥: [./koans](./koans): Explore the JS language by completing code and writing unit tests
- 🐣: [fuzz testing](https://hackyourfuturebelgium.github.io/fuzz)
- 🐣, 🐥: More Repos of Exercises:
  - [rolling-scopes-school](https://github.com/rolling-scopes-school/js-assignments)
  - [Functions and Arrays](https://github.com/ironhack-labs/lab-javascript-functions-and-arrays/)
  - [Advanced Collection Methods](https://github.com/ironhack-labs/lab-javascript-advanced-collection-methods)
  - [Native Array Methods](https://github.com/gSchool/native-array-methods-exercises/)
  - [clue](https://github.com/ironhack-labs/lab-javascript-clue/)
  - [JavaScript-Koans](https://github.com/HackYourFutureBelgium/JavaScript-Koans/tree/master/src) (1-4)
- [edabit](https://edabit.com/) (endless coding challenges)

> Are we missing a great set of exercises? Send a PR!

### Reading Code

- [Code Reading Exercises](https://github.com/neontribe/code-reading-club/blob/trunk/exercises.md)
- [Learning from Code](https://study.hackyourfuture.be/learning/learning-from-code)
- [Links from `reading-codewars`](https://github.com/HackYourFutureBelgium/behavior-strategy-implementation#helpful-links)
- More code to read
  - [dinanathsj29/javascript-exercise-beginners](https://github.com/dinanathsj29/javascript-exercise-beginners)
  - [KBPsystem777](https://github.com/KBPsystem777/JSexercises)
  - [JavaScript Questions](https://github.com/lydiahallie/javascript-questions/)

### About Testing

- FunFunFunction:
  1. [Writing tests for personal projects](https://www.youtube.com/watch?v=ib2Pt9_zciA)
  1. [Why Unit Tests?](https://www.youtube.com/watch?v=Eu35xM76kKY)
  1. [Your First Tests](https://www.youtube.com/watch?v=XsFQEUP1MxI)
- Oliverjam
  - [roman-numeral-tdd-codealong](https://github.com/oliverjam/roman-numeral-tdd-codealong)
  - [learn-unit-testing](https://github.com/oliverjam/learn-unit-testing)

### JS References & Tutorials

#### Reference vs. Values

- [Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
- [Mosh video](https://www.youtube.com/watch?v=fD0t_DKREbE)
- [CodeBurst article](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/06-Equality-of-Values)
- [Janke Learning](https://github.com/janke-learning/reference-vs-value)
- [javascript.info](https://javascript.info/object-copy#comparison-by-reference)

### Higher-Order Functions

- [FunFunFunction](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
- [The Coding Train](https://www.youtube.com/watch?v=H4awPsyugS0)
- [Traversy](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- [damcosset](https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b)
- [bitsrc](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)
- [Mosh](https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript/)

#### Arrays

- [JS Tutor Video](https://www.youtube.com/watch?v=W1NTK09o-vM)
- [Coding with Mosh](https://www.youtube.com/watch?v=oigfaZ5ApsM)
- [30 Days of JavaScript](https://github.com/Asabeneh/30DaysOfJavaScript/blob/master/05_Day/05_day_arrays.md) (stop at array methods)
- [javascript.info](https://javascript.info/array) (just the beginning)
- `for of` loops
  - [javascript.info](https://javascript.info/array#loops)
  - [Coding Train](https://www.youtube.com/watch?v=Y8sMnRQYr3c)
- Array Methods
  - [javascript.info](https://javascript.info/array-methods)
  - FunFun: [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2), [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
  - [CYF](https://codeyourfuture.github.io/syllabus-london/js-core-3/array-methods.html)
  - [Una Kravets](https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/)
  - [Cheat Sheet](https://jrsinclair.com/javascript-array-methods-cheat-sheet)
  - Oliverjam: [learn-map-filter](https://github.com/oliverjam/learn-map-filter), [tdd-array-methods](https://github.com/oliverjam/tdd-array-methods)

#### Objects

- [javascript.info](https://javascript.info/object)
- [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/07-Properties)
- [dots vs brackets](https://www.youtube.com/watch?v=7lQ31dJEYoM) (video)
- [dots vs brackets](https://github.com/janke-learning/dots-vs-brackets) (example)
- `for ... in`
  - [javascript.info](https://javascript.info/object#the-for-in-loop)
  - [`for in`, vs `for of`](https://alligator.io/js/for-of-for-in-loops/)
  - [a video](https://www.youtube.com/watch?v=prl73KRkB34)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  - [w3schools](https://www.w3schools.com/jsref/jsref_forin.asp)
- Object Transformations
  - [tutorialcup](https://www.tutorialcup.com/javascript/object-to-array-in-javascript.htm)
  - [chrisburgin](https://medium.com/chrisburgin/javascript-converting-an-object-to-an-array-94b030a1604c)
  - [steve griffith](https://www.youtube.com/watch?v=VmicKaGcs5g) (video)
  - [all things javascript](https://www.youtube.com/watch?v=A0g7sga28Zg) (video)
  - [stackoverflow](https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript)
- Arrays of Objects
  - [short, sweet, with a loop](https://www.youtube.com/watch?v=ivNWS9s7vhA) (video)
  - [Sorting an Array of Objects](https://www.youtube.com/watch?v=0d76_2sksWY) (video)
  - [another Sorting](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/) (video+article)
  - [Search from Array of Objects](https://www.youtube.com/watch?v=US63Q6AL0GI) (video)
  - [Create, Update and Loop](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/) (article)
  - [The Coding Train](https://www.youtube.com/watch?v=fBqaA7zRO58) (video)

#### Recursion

- [FunFunFunction](https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7)
- [javascriptutorial](https://www.javascripttutorial.net/javascript-recursive-function/)
- [Beau](https://www.youtube.com/watch?v=vPEJSJMg4jY)

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 1

- Reference vs. Value & side-effects
- Testing: `describe`, `it` and `chai`
- Using arrays
- Connecting HTML/CSS with JavaScript

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- Reference vs. Value
  - [Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
  - [Mosh video](https://www.youtube.com/watch?v=fD0t_DKREbE)
  - [CodeBurst article](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c)
  - [Just JavaScript](https://github.com/HackYourFutureBelgium/just-javascript/tree/master/06-Equality-of-Values)
- Isolate (examples):
  - `arrays`
  - `reference-vs-value`
  - `about-testing`
  - `for-of`
- [Read the `reading-codewars` README](https://github.com/HackYourFutureBelgium/reading-codewars)


### During Class

#### Before Break

- Isolate:
  - `reference-vs-value`
  - `side-effects`

#### After Break

- Isolate:
  - `for-of`
- Integrate:
  - `user-input-in-arrays`
- Introduction to _Reading Codewars_

### After Class

> Group Project

_coming soon_

```markdown
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [ ] [backlog](https://github.com/_/_/tree/master/planning/backlog.md)
- [ ] [Figma planning document](_)
- [ ] [development strategy](https://github.com/_/_/tree/master/planning/development-strategy.md)
- [ ] [project board](https://github.com/_/_/projects/_)
- [ ] [one branch per step](https://github.com/_/_/branches)
- [ ] [one closed PR per step](https://github.com/_/_/pulls)
```

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 2

Higher-Order Functions and Functional Array Methods

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- The Coding Train: [Higher-Order Functions](https://www.youtube.com/watch?v=H4awPsyugS0)
- FunFunFunction:
  - [Higher-Order Functions](https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056)
  - [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)
  - [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3)
- Isolate (examples):
  - `the-callstack`
  - `higher-order-functions`
  - `functional-array-methods`

### During Class

#### Before Break

#### After Break

### After Class

#### Checklist

</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Week 3

- Iterating over objects using `for ... in` loops
- Using objects to store project data

<details open>
<summary>expand/collapse</summary>
<br>

### Before Class



### During Class

#### Before Break


#### After Break


### After Class


</details>
<br>

[TOP](#behavior-strategy-implementation)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes.  Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

## class-9-10

> [Charles](https://github.com/cpauwels), [Sali](https://github.com/Sali-Almurshidi) & [Evan](https://github.com/)

1. Week 1:
    - Sunday Part 1: [Reference vs. Value](https://vimeo.com/435470622)
    - Sunday Part 1: [Map, Reduce, Filter, Every](https://vimeo.com/435470848)
    - Sunday Part 2: [Mini-project intro](https://vimeo.com/435471018)
    - Sunday Part 3: [Recap & Homework](https://vimeo.com/435485572)
2. Week 2:
    - Sunday Part 1: [The Callstack](https://vimeo.com/437861452)
    - Sunday Part 1: [Higher Order Functions](https://vimeo.com/437861558)
    - Sunday Part 1: [Arrows vs. Functions](https://vimeo.com/437861744)
    - Sunday Part 1: [Error: EADDRINUSE](https://vimeo.com/437862520)
    - Sunday Part 2: [Reverse-Engineering](https://vimeo.com/437861934)
    - Sunday Part 2: [R-E & Assignments](https://vimeo.com/437862407)
3. Week 3:
    - Sunday Part 1: [Objects 1](https://vimeo.com/440023525)
    - Sunday Part 1: [Objects 2](https://vimeo.com/440023799)
    - Sunday Part 2: [User input in Objects](https://vimeo.com/440024065)

