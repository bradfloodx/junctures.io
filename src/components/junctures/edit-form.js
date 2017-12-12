import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		onSubmit: () => {},
		juncture: {
			name: 'Mobx',
			dateTime: 77,
			id: 88
		}
	}
};

const JunctureEditForm = styled.form`
	border: 1px solid rebeccapurple;
	padding: 1rem;
`;

const JunctureEditFormWrapper = ({onSubmit, juncture}) => (
	<JunctureEditForm onSubmit={onSubmit}>
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
	</JunctureEditForm>
);

JunctureEditFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	juncture: PropTypes.object
};

export {JunctureEditFormWrapper as JunctureEditForm};
export default connect(mapStateToProps)(JunctureEditFormWrapper);
