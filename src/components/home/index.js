import React from 'react';
import './home.css';

export default class Home extends React.Component {
	render() {
		return (
			<div className="container-home">
				<header>
					<div className="row">
						<div className="col-md-12">
							<h2>Minimum React Setup</h2>
						</div>
					</div>
				</header>
				<div className="gray-box">
					<h3>Welcome to the minimum react setup</h3>
					<p>If you can see this message is because you have installed the minimum react setup successfully.</p>
					<p>Minimum React Setup is an extension for <b>create-react-app</b> which installs for you some components that are important to your app such as:</p>
					<ul>
						<li>Gulp</li>
						<li>React Router V4</li>
						<li>Sass</li>
					</ul>
					<p>If you do not know how to use minimum react setup, read the file README.md to get started</p>
				</div>
			</div>
		);
	}
}