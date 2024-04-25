/*
! Functional Programming Wrapup

? Essential Concepts:
*   - Higher order functions, first class functions
*   - Pure functions
      - Referential Transparency
        - The function always gives the same return value for the same arguments.
        - The function cannot depend on any mutable state
      - Side-effect Free:
        - The function cannot cause any side effects
        - Side-effects may include I/O (writing to the console / log file), modifying a mutable object, reassigning a variable, etc.
*   - Immutability
*   - Closure
*   - Partial Application / Currying
*   - Function composition

? What FP Avoids:
*   - Looping
*   - Mutation / Shared State
*   - Variable declarations

? Benefits of Pure Functions
*   - Can be easier to reason about/debug because they don't depend on any state.
*   - Return value can be cached or memoized to avoid recomputation later.

? Popular Libraries for FP:
  - Ramda
  - Lodash FP Model

? Resources for FP:
  - Professor Frisby's mostly adequate guide to functional programming

? OOP vs. FP
*   - OOP is often easier to reason about and read
*   - FP has a steeper learning curve but can allow for functions to be simplified and easily composed.
*   - Different languages have different takes
        Primarily functional: Haskell, Schema, Clojure
        Primarily OOP: Java
        Multi-paradigm: JS, Python, C#, Swift, Ruby
*/