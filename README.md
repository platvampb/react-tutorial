# Welcome To The Wherego's React Tutorial

## You are at Step 2 

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

P.S. At this point you may have come across it: in the console window where you launched the Webpack Dev Server, you will occasionally come across red colored error messages after you made changes to some of the files. This is because the main purpose of Webpack, which runs in the background of Webpack Dev Server, is translating (not really compiling) all the javascript and style files into one or several bundled file. This "translating" process includes converting the ES6 style React code into browser compaticble ES5 code, converting `.scss` syntax stylesheets to `css` stylesheets. Since it is doing all this anyways, we also tasked it to check for basic syntax and style errors in our code. Webpack runs in real time by Webpack Dev Server. So everytime you are done with some changes, you really want to check the Webpack Dev Server console for errors frist. If there is error in there, your change will not be updated to the browser.
