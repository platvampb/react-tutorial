# Welcome To The Wherego's React Tutorial

# You are at Step 2 

In this step you will introduce React into this project.

### Installation
First, we want to install React for our development environment.

**Action** Do so by adding React and React Dom packages to our project by running the following command:
```
npm install --save react react-dom
```

The "--save" flag saves packages to the project's dependency list. After running the above command, check your package.json file and you should find these items in your "dependencies" field:

```
"react": "^15.0.0",
"react-dom": "^15.0.0"
```

### Use React
There is a new directory "app" in your project. Find "app.js" file in it.

**Action** Uncomment the two lines on top of the app.js file.

"import" is the way to bring external code into a javascript file in ES6 syntax. We will see more of it later. In this case, we brought the code from React into an object called `React` and the `render` function from React Dom library.

Notice that there is a bit of html code in the `render` call in app.js. The code simply tries to insert a new `div` element into an existing element with the id `apps`.

**Action** So now start up the Webpack Dev Server: `npm start`

Now if you visit 127.0.0.1:3000, you should see the phrase "Step 2 completed!".

Wait what? You don't?

Well, to tell the truth, there is a subtle bug hidden in the code.

Proceed to the next step after you manage to find it and get the text to appear in your browser.
