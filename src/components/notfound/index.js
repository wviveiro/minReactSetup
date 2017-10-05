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

