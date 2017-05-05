# Welcome To The Wherego's React Tutorial

# You are at Step 4 

In this step you will learn about basic data flow.

Start up your Webpack Dev Server and goto `127.0.0.1:3000`. You should see "Step 4" in your browser window.

### Props
Data is passed from a parent component to child components via props.

Look at how data is passed from the component `AppBody` to `Step`.

A prop `stepNumber` passed with a value '4'.

And in `Step` component, the data is accessed by using `this.props.stepNumber`.

Try changing the value of `stepNumber` in `AppBody`. The change should be reflected on the page.

### State
In programming, 'state' refers to the information that a program stores to describe its, well, current state. For our purposes, we usually use 'state' to describe call the essential data that affect the display of UI elements.

A component can keep its own state by declaring a state object. 

In `AppBody`'s constructor, a state object is declared with a variable called `completed`. You should always initialize state object in the constructor.

### Event handling
On a Web page, user interactions with the UI trigger different events. Implement handlers for these events enable corresponding actions.

Take a look at the `CompleteLink` component. It has declared a `onClick` event on the `div` element and have assigned the `completeStep` method to handle the event. Read the `completeSte` method definition, and the code in `Completed` component. Now take a guess what the method does.

**Action** Now uncomment the `<CompletLink/>` line in `AppBody`. You should be able to see a new line "Click to complete!" in your browser. What happens when you click on it?

Nothing?

**Action** Open the debug console of your browser and click on the line again. You should be able to see the line "I am clicked!" in the console output.

You should also see an error message that says: "Cannot assign to read only property 'completed' of object '#<Object>'"

That means the data passed in through props are read only and cannot be modified.

This is a central concept of React's component system. Conceptually, data can only be sent down from parent components to child, not up. This design is referred to as "one way data-binding" or "unidirectional data flow". You can read about it more [here](https://www.exclamationlabs.com/blog/the-case-for-unidirectional-data-flow/).

In order to change data that are "above" a component, the component where the data was initiated as a state variable must implement a method that can change the data and pass it down.

Find the `completeStep` method in `AppBody`. This method uses `setState` method to update the state variable. You should only use `setState` to change state variables.

**Action** pass the `completeStep` method as a prop to the `CompletLink` component. Attach it to the `onClick` event.

When you are able to see the "Step 4 completed!" message, go to next step.
