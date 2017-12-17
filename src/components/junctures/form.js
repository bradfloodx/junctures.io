import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JunctureForm = styled.form`
	padding: 1rem;
`;

const JunctureFormWrapper = ({onFieldChange, onSubmit, name, date, time}) => {
	const onChange = ({target: {name, value}}) => onFieldChange(name, value);

	return (
		<JunctureForm onSubmit={onSubmit}>
			<h3>{name}</h3>
			<label>
				<span>Name</span>
				<input
					type="text"
					name="name"
					placeholder="Name..."
					value={name}
					onChange={onChange}
				/>
			</label>
			<label>
				<span>Date</span>
				<input
					type="date"
					name="date"
					value={date}
					onChange={onChange}
				/>
			</label>
			<label>
				<span>Time</span>
				<input
					type="time"
					name="time"
					value={time}
					onChange={onChange}
				/>
			</label>
			<button type="submit">Go!</button>
		</JunctureForm>
	)
};

JunctureFormWrapper.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	onSubmit: PropTypes.func.isRequired
};

export default JunctureFormWrapper;
