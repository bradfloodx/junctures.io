import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import {displayDistance} from '../../utils';

const JunctureFormWrapper = ({
	onFieldChange,
	onSubmit,
	name,
	date,
	time,
	buttonLabel,
	onDelete
}) => {
	const onChange = ({target: {name, value}}) =>
		onFieldChange(name, value);

	return (
		<Card>
			<form onSubmit={onSubmit}>
				<CardContent>
					<Typography type="headline" component="h2">
						{name || 'Juncture'}
					</Typography>
					<Typography type="subheading" color="secondary">
						{date && time ?
							displayDistance(date, time)
							:
							'...'
						}
					</Typography>
					<div>
						<TextField
							label="Name"
							name="name"
							value={name}
							onChange={onChange}
							margin="normal"
						/>
					</div>
					<div>
						<TextField
							label="Date"
							name="date"
							value={date}
							type="date"
							onChange={onChange}
							margin="normal"
							InputLabelProps={{
								shrink: true
							}}
						/>
					</div>
					<div>
						<TextField
							label="Time"
							name="time"
							value={time}
							type="time"
							onChange={onChange}
							margin="normal"
							InputLabelProps={{
								shrink: true
							}}
						/>
					</div>
				</CardContent>
				<CardActions>
					<Button raised color="primary" type="submit">
						{buttonLabel}
					</Button>
					{onDelete &&
						<Button
							raised
							color="primary"
							onClick={onDelete}
						>
							Delete
						</Button>
					}
				</CardActions>
			</form>
		</Card>
	)
};

JunctureFormWrapper.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	buttonLabel: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onDelete: PropTypes.func
};

JunctureFormWrapper.defaultProps = {
	name: '',
	date: '',
	time: '',
	buttonLabel: 'Save',
	onDelete: null
};

export default JunctureFormWrapper;
