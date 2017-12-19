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
	flex: {
		flex: 1,
	}
};

const HeaderWrapper = ({ classes, links, go }) => (
	<div className={classes.root}>
		<AppBar position="static">
			<Toolbar>
				<Typography type="title" color="inherit" className={classes.flex}>
					Title
				</Typography>
				{links.map(({ title, path }) => (
					<Button color="contrast" onClick={() => go(path)}>
						{title}
					</Button>
				))}
			</Toolbar>
		</AppBar>
	</div>
);

HeaderWrapper.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string
		})
	).isRequired
};

export default withStyles(styles)(HeaderWrapper);
