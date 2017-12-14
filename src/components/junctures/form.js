import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JunctureForm = styled.form`
	padding: 1rem;
`;

const JunctureFormWrapper = ({onFieldChange, onSubmit, juncture}) => (
	<JunctureForm onSubmit={onSubmit}>
		{juncture.name && <h1>{juncture.name}</h1>}
		<label>
			<span>Name</span>
			<input
				type="text"
				placeholder="Name..."
				value={juncture.name}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</label>
		<label>
			<span>Date</span>
			<input
				type="date"
				value={juncture.date}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</label>
		<label>
			<span>Time</span>
			<input
				type="time"
				value={juncture.time}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</label>
		<button type="submit">Go!</button>
	</JunctureForm>
);

JunctureFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	// juncture: PropTypes.objectOf(
	// 	PropTypes.shape({
	// 		name: PropTypes.string,
	// 		date: PropTypes.string,
	// 		time: PropTypes.string,
	// 		id: PropTypes.number
	// 	})
	// )
};

export default JunctureFormWrapper;
