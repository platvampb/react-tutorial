# Welcome To The Wherego's React Tutorial

# You are at Step 3 

In this step you will introduce React Component into this project.

### What is React Component?
* React Components, as far as Wherego's applications go, contain ES6, JSX, and occasionally CSS in JSX syntax.

* A React Component is a modulized unit that renders a HTML elements.

* A React Component can render other React Components ("child components"), and often do.

* A React Component can receive data and pass data down to "child" components, via `props` mechanism. 

* A React Component can contain internal data called `state`.

To learn more about React Component, read [here](https://facebook.github.io/react/docs/react-component.html).

You will also want to read up on [JSX](https://shripadk.github.io/react/docs/displaying-data.html).

### Introducing React Component
At Wherego, we usually put ONE component in ONE .jsx file. So, to use a component, we first need to introduce the code in a .jsx file into our current file.

**Action** In `app/app.js`, uncomment the line `import AppBody from './AppBody'`

Now if you visit 127.0.0.1:3000, you should see the phrase "Step 3" in your browser window.

### A bit further with Component
`app/AppBody.jsx` is the component in its minimum form. It is an object that 'extends', which is a form of inheritance, the Component class and implements the `render` method. In the `render` method, it returns some HTML code written in JSX syntax.

The single most useful feature of the React Component system is that a component can render any number of other components.

You are going to try that feature out.

**Action** Remove the text `Step 3` from `app/AppBody.jsx`. Use `app/Step.jsx` and `app/Completed.jsx` inside the `app-body` element in `app/AppBody.jsx` to display the sentence "Step 3 completed!".

Hint: The syntax is very similar to how we used AppBody in `app.js`.

After you are done, proceed to the next step.
 
