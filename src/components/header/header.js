import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routes';
import {COLORS, FONT_SIZES} from '../../theme';
import profileIcon from './ic_person_white_36dp_2x.png';

const Header = styled.header`
	margin-bottom: 15px;
	padding: 15px;
	background-color: ${COLORS.header.background};
`;

const NavUl = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	justify-content: flex-end;
	align-items: center;
`;

const NavLi = styled.li`
	margin-left: 15px;
	list-style: none;
`;

const NavLiTitle = styled.li`
	flex-grow: 1;
	list-style: none;
`;

const NavLink = styled(Link)`
	display: inline-block;
	padding: 10px 15px;
	border-radius: 3px;
	font-size: ${FONT_SIZES.base}px;
	font-family: 'Josefin Sans', sans-serif;
	color: ${COLORS.header.links.color};
	text-decoration: none;
	
	&:hover {
		background-color: ${COLORS.header.links.hoverBackground};
	}
`;

const NavLinkTitle = NavLink.extend`
	padding: 6px 15px;
	font-size: 24px;
`;

const TitleDomain = styled.span`
	font-size: 14px;
`;

const ProfileIcon = styled.img`
	width: ${FONT_SIZES.base}px;
`;

export const HeaderWrapper = ({navLinks, profileLink}) => (
	<Header>
		<nav>
			<NavUl>
				<NavLiTitle>
					<NavLinkTitle
						to={routes.home.path}
						title={routes.home.description}
					>
						Junctures<TitleDomain>.io</TitleDomain>
					</NavLinkTitle>
				</NavLiTitle>
				{navLinks.map((link) => (
					<NavLi>
						<NavLink
							to={link.path}
							title={link.description}
						>
							{link.title}
						</NavLink>
					</NavLi>
				))}
				{profileLink &&
					<NavLi>
						<NavLink
							to={profileLink.path}
						>
							<ProfileIcon
								src={profileIcon}
								alt={profileLink.description}
							/>
						</NavLink>
					</NavLi>
				}
			</NavUl>
		</nav>
	</Header>
);

HeaderWrapper.propTypes = {
	navLinks: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string,
			description: PropTypes.string,
		})
	).isRequired,
	// profileLink: PropTypes.,
};


export default HeaderWrapper;
