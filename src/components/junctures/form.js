import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JunctureForm = styled.form`
	border: 1px solid rebeccapurple;
	padding: 1rem;
`;

const JunctureFormWrapper = ({onSubmit, juncture}) => (
	<JunctureForm onSubmit={onSubmit}>
		<h1>{juncture.name}</h1>
		<label>
			<span>Name</span>
			<input
				type="text"
				placeholder="Name..."
				defaultValue={juncture.name}
			/>
		</label>
		<label>
			<span>Date</span>
			<input type="date" />
		</label>
		<label>
			<span>Time</span>
			<input type="time"/>
		</label>
		<button type="submit">Go!</button>
	</JunctureForm>
);

JunctureFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	juncture: PropTypes.object
};

export default JunctureFormWrapper;
