# Welcome To The Wherego's React Tutorial

# You are at Step 1 

In this step you will get a change to familiarize yourself with the basic toolings that help power most our product's front-end.

There are 3 visible files other than this README.md in your directory right now.
They are:
* package.json
* webpack.config.json
* build/index.html

### package.json
This file is a configuration file used by NPM, the package management of our choice.

A good quick desciption of what a package manager is can be found [here](https://en.wikipedia.org/wiki/Package_manager).

To understand how this file works for NPM, read the official [manual](https://docs.npmjs.com/getting-started/using-a-package.json).

**Action** Having this file allows quickly setup of a development environment by simply entering this command into a terminal window:`npm install`. This will install all the dependencies you need for this step.

### webpack.conig.json
This file is a configuration file used by Webpack.

For what Webpack is and does, see [here](https://webpack.js.org/).

You are not required to understand how webpack works. The only thing you need to know is that we use webpack-dev-server, a webpack plugin, to serve your webpages in development environment.

In package.json, find the code below
```
  "scripts": {
    "start": "webpack-dev-server --host 0.0.0.0 --port 3000 --hot --progress --colors"
  },
```

These lines of code set the npm command "start" to start a webpack dev server. So the command `npm start` is now a shorthand command of `webpack-dev-server --host 0.0.0.0 --port 3000 --hot --progress --colors`

**Action** Go ahead, start the server by running this command `npm start`.

### build/index.html
This is the default html page served by our little project.

Go to 127.0.0.1:3000 in a browser window to access this page.

Right now it doesn't show anything.

**Action** Remove the comment tag around the `<h1>` element so the content gets displayed.

Now if you refresh your browser window you should see the line "Step 1 completed!" appear!

In case you havn't gotten the hint already, you have succesfully completed Step 1 and should proceed to the next step.
