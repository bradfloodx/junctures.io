import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CardActions, CardContent } from 'material-ui/Card';
import styled from 'styled-components';

import {displayDistance} from '../../utils';

const JunctureFormContainer = styled.form`
	max-width: 640px;
	margin: auto;
`;

const DistanceFields = styled.div`
		
	@media (min-width: 1025px) {
		display: flex;
	}
`;

const JunctureFormWrapper = ({
	onFieldChange,
	onSubmit,
	name,
	date,
	time,
	buttonLabel,
	title,
	onDelete
}) => {
	const onChange = ({target: {name, value}}) =>
		onFieldChange(name, value);

	return (
		<JunctureFormContainer onSubmit={onSubmit}>
			<CardContent>
				<Typography type="headline" component="h2">
					{name || title}
				</Typography>
				<Typography type="subheading" color="secondary">
					{date && time ?
						displayDistance(date, time)
						:
						'At a distance in time'
					}
				</Typography>
				<TextField
					label="Name"
					name="name"
					value={name}
					type="text"
					required
					onChange={onChange}
					margin="normal"
					fullWidth
					autoFocus
				/>
				<DistanceFields>
					<TextField
						label="Date"
						name="date"
						value={date}
						type="date"
						required
						onChange={onChange}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true
						}}
					/>
					<TextField
						label="Time"
						name="time"
						value={time}
						type="time"
						required
						onChange={onChange}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</DistanceFields>
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
		</JunctureFormContainer>
	)
};

JunctureFormWrapper.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	buttonLabel: PropTypes.string,
	title: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onDelete: PropTypes.func
};

JunctureFormWrapper.defaultProps = {
	name: '',
	date: '',
	time: '',
	buttonLabel: 'Save',
	title: 'Juncture',
	onDelete: null
};

export default JunctureFormWrapper;
