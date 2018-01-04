import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
	root: {
		width: '100%',
	},
	logo: {
		flex: 1,
		cursor: 'pointer'
	}
};

export const HeaderWrapper = ({ classes, links, go }) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<Typography
					type="title"
					color="inherit"
					className={classes.logo}
					onClick={() => {go('/')}}
				>
					Junctures.io
				</Typography>
				{links.map(({ title, path }) => (
					<Button
						color="contrast"
						onClick={() => go(path)}
						key={title}
					>
						{title}
					</Button>
				))}
			</Toolbar>
		</AppBar>
	</div>
);

HeaderWrapper.propTypes = {
	classes: PropTypes.object, // MaterialUI
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string
		})
	).isRequired,
	go: PropTypes.func,
};

export default withStyles(styles)(HeaderWrapper);
