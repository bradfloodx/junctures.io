import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const AuthFormWrapper = ({
	onSubmit,
	onFieldChange,
	title,
	username,
	password,
	buttonLabel
}) => {
	const onChange = ({ target: { name, value } }) =>
		onFieldChange(name, value);

	return (
		<Card>
			<form onSubmit={onSubmit}>
				<CardContent>
					<Typography type="headline" component="h2">
						{title}
					</Typography>
					<div>
						<TextField
							label="Email"
							type="email"
							name="username"
							value={username}
							required
							onChange={onChange}
							margin="normal"
							autocomplete="email"
							autofocus
						/>
					</div>
					<div>
						<TextField
							label="Password"
							type="password"
							name="password"
							value={password}
							required
							onChange={onChange}
							margin="normal"
							autocomplete="new-password"
							minlength="6"
						/>
					</div>
					<p>Min 6 characters for password</p>
				</CardContent>
				<CardActions>
					<Button raised color="primary" type="submit">
						{buttonLabel}
					</Button>
				</CardActions>
			</form>
		</Card>
	)
};

AuthFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onFieldChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	username: PropTypes.string,
	password: PropTypes.string,
	buttonLabel: PropTypes.string
};

export default AuthFormWrapper;
