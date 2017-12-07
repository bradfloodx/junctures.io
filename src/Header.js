import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderContainer = () => (
	<Header>
		<span>TaN</span>
		<nav>
			<ul>
				<li>Sign In</li>
				<li>Register</li>
			</ul>
		</nav>
	</Header>
);

export default HeaderContainer;
