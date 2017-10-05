import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

/**
 * Components
 */
 import Home from './components/home';
 import NotFound from './components/notfound';

class Router extends Component {
	render() {
		return (
			<div ref="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</div>
		)
	}
}

export default withRouter(Router);