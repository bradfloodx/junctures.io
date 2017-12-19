import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JunctureForm = styled.form`
	padding: 1rem;
`;

const Label = styled.label`
	display: flex;
	margin: 1em;
`;

const JunctureFormWrapper = ({
	onFieldChange,
	onSubmit,
	name,
	date,
	time,
	onDelete
}) => {
	const onChange = ({target: {name, value}}) =>
		onFieldChange(name, value);

	return (
		<JunctureForm onSubmit={onSubmit}>
			<h3>{name}</h3>
			<Label>
				<span>Name</span>
				<input
					type="text"
					name="name"
					placeholder="Name..."
					value={name}
					onChange={onChange}
				/>
			</Label>
			<Label>
				<span>Date</span>
				<input
					type="date"
					name="date"
					value={date}
					onChange={onChange}
				/>
			</Label>
			<Label>
				<span>Time</span>
				<input
					type="time"
					name="time"
					value={time}
					onChange={onChange}
				/>
			</Label>
			<button type="submit">Go!</button>
			<hr/>
			<button type="button" onClick={onDelete}>Delete</button>
		</JunctureForm>
	)
};

JunctureFormWrapper.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onDelete: PropTypes.func
};

JunctureFormWrapper.defaultProps = {
	name: '',
	date: '',
	time: '',
	onSubmit: () => {},
	onDelete: () => {}
};

export default JunctureFormWrapper;
