import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JunctureEditForm = styled.form`
	border: 1px solid rebeccapurple;
	padding: 1rem;
`;

const JunctureEditFormWrapper = ({onSubmit}) => (
	<JunctureEditForm onSubmit={onSubmit}>
		<h1>edit name form</h1>
		<label>
			<span>Name</span>
			<input type="text" placeholder="Name..."/>
		</label>
		<label>
			<span>Date</span>
			<input type="date" />
		</label>
		<label>
			<span>Name</span>
			<input type="time"/>
		</label>
		<button type="submit">Go!</button>
	</JunctureEditForm>
);

JunctureEditFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default JunctureEditFormWrapper;
