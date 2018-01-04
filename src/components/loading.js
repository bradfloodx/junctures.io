import React from 'react';
import styled, {keyframes} from 'styled-components';

const cubeMove = keyframes`
	25% {transform: translateX(30px) rotate(-90deg) scale(0.5);}
	50% {transform: translateX(30px) translateY(30px) rotate(-179deg);}
	50.1% {transform: translateX(30px) translateY(30px) rotate(-180deg);}
	75% {transform: translateX(0px) translateY(30px) rotate(-270deg) scale(0.5);}
	100% {transform: rotate(-360deg);}
`;

const Loading = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content:center;
`;

const Spinner = styled.div`
	position: relative;
	width: 60px;
	height: 60px;
`;

const Cube = styled.div`
	background-color: #333;
	width: 15px;
	height: 15px;
	position: absolute;
	top: 0;
	left: 0;
	
	animation: ${cubeMove} 2s infinite ease-in-out;
	animation-delay: ${props => props.delay || 0};
`;

const LoadingWrapper = () => (
	<Loading>
		<Spinner>
			<Cube />
			<Cube delay={'-1s'} />
		</Spinner>
	</Loading>
);

export default LoadingWrapper;
