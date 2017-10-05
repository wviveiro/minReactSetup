# Minimum React Setup #


Minimum React Setup is an extension of **create-react-app** which installs for you some components that are important to your app such as:

* React Router V4
* Sass

## Minimum global requirement ##

To be able to use the minimum react setup, you need to have installed on your computer the following components:

* [Node.js](https://nodejs.org/en/)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [Gulp](https://gulpjs.com/)

After that you are ready to start with your minimum react setup

## Getting Started ##

```
	git clone https://github.com/wviveiro/minReactSetup.git minreact
	cd minreact
	npm start
```
You can still **build and eject** your **create-react-app**. this repo just gives an extra power for this component.

The magic of this project happens inside the folder `src`. The folder structure is as below:

```
.
+-- src
|	+-- components
|	|	+-- home
|	|	|	+-- home.scss
|	|	|	+-- index.js
|	|	+-- notfound
|	|	|	+-- notfound.scss
|	|	|	+-- index.js
|	+-- index.js
|	+-- routes.js
|	+-- style.scss
```

### Main Files ###
**index.js** - main entry of the project. Here is were we call the ReactDOM and add the global style css file and the routes to the project. This file is only modified if some global library is added to the project.

**routes.js** - The routes of the project. The default minimum react project comes with two routes, **home** and **notfound**.

### Components ###

Minimum react setup works with components. The minimum requirement for a component to work is a `js` file with a `jsx` structure within. As and example, the `notfound` component:

```javascript
import React from 'react';
import './notfound.css';

export default class Notfound extends React.Component {
	render() {
		return (
			<div className="container-notfound">
				<h1>404</h1>
				<h2>Page not found</h2>
				<p><a href="/">Click here</a> to go back home</p>
			</div>
		);
	}
}
```

This `.js` file can be called in the `routes.js` file and it is ready to go. Inside a component you can have `.scss` files and other files related to the component.

Not always **components** are **routes**. You can create a component to be shared among several routes.

### Hello World Component ###

To understand this project, let's create a **Hello World** component. 

First we started creating the folder and the `.js` file of our component

```
mkdir src/components/helloWorld
touch src/components/helloWorld/index.js
```

We edit the `index.js` file with the jsx content we want.

```javascript
import React from 'react';

export default class HelloWorld extends React.Component {
	render() {
		return <div className="my-hello-world">Hello World</div>;
	}
}
```

Now, we add the route to our `routes.js` file

```diff
import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

/**
 * Components
 */
 import Home from './components/home';
 import NotFound from './components/notfound';
 +import HelloWorld from './components/helloWorld';

class Router extends Component {
	render() {
		return (
			<div ref="main">
				<Switch>
					<Route exact path="/" component={Home} />
+					<Route exact path="/hello-world" component={HelloWorld} />
					<Route component={NotFound} />
				</Switch>
			</div>
		)
	}
}

export default withRouter(Router);

```

Done! When you access the url (http://localhost:3000/hello-world) you will see your **Hello World** component.

We can also create a scss file to our component.

```
touch src/components/helloWorld/helloWorld.scss
```

We are going to change the font of our hello world.

```css
.my-hello-world {
	color: #F00;
	font-size: 20px;
	text-align: center;
}
```
As you will notice, nothing will happen to your Hello World screen. What we need to do now is to import the `css` file in the `js` file.

```diff
import React from 'react';
+import './helloWorld.css';

export default class HelloWorld extends React.Component {
	render() {
		return <div className="my-hello-world">Hello World</div>;
	}
}
```

We have imported the file `.css` to the `.js` file, not the `.scss`. It is because **create-react-app** still does not know how to read `scss` files, but the **minimum react setup** creates a `css` file from the `scss`. On this way, you are able to use `scss` files in your project.


## Warning ##
At the end, all js and css files are bundled together in one js and one css file, so your css will be treated as global. To avoid overwriting stylesheets, try to always wrap your jsx components in classes that are not going to be used anywhere else, so you will be able to organise better your project.
