# React Quiz

This quiz is designed to test your familiarity with basic React components. There is no redux requirement, use React's built in `setState`

## Rules

1. Use standard lab process: fork this repo and clone locally.
1. **Make an initial commit when you start your work**
1. You have **35 minutes** to complete what you can.
1. You must complete this work on your own within the allotted time
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and push your commits frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Working webpack react build system is included (**remember to `npm i` after cloning your forked repo!**)
1. You may install npm packages of your choosing, though probably not needed
1. Use general best practices and common sense
    * Highly recommended to implement what is needed, no more no less
    * Blind boilerplate or copying in code will not be helpful and will likely create more work
    * **Focus effort on requirements of the lab**
1. Total possible points are 50. You will be graded out of 40 points

## Submission requirement

* **Do a fork and PR like a normal lab**
* **There are no testing requirements**

## Base Requirements

Build an app that displays a list of taks. Use the following component structure:

* `App` - top level App component. **Notice that the component already has state of array of tasks**
  * `Tasks` - component that accepts an array of tasks to display and creates a list with a `Task` component for each task
    * `Task` - component that accepts a task and displays the text and level of the task. For the level, display "easy" if 1, "medium" if 2, and "hard" if 3
  * Remove a task
    1. Create a `handleRemove` method in `App` that takes a task and updates the state to remove that task from the array
    1. Pass the callback function to an `onRemove` prop from `App` to `Tasks` and then from `Tasks` to `Task`
    1. Put a button in `Task` that, when clicked, will call the callback function with the task being removed.
