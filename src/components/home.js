import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import routes from "../routes";

const Home = ({userAuthenticated}) => (
	<div>
		<h1>Juncture</h1>
		<p>
			A point of time, especially one made critical or important
			by a concurrence of circumstances.
		</p>
		{userAuthenticated ? (
			<p>
				<Link to={routes.juncturesCreate.path}>
					Create a Juncture
				</Link> or <Link to={routes.junctures.path}>
					See your List
				</Link>
			</p>
		) : (
			<p>
				<Link to={routes.register.path}>
					Register
				</Link> or <Link to={routes.signIn.path}>
					Sign In
				</Link>
			</p>
		)}
	</div>
);

Home.propTypes = {
	userAuthenticated: PropTypes.bool
};

export default Home;
