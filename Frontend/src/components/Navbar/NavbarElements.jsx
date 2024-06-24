import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #000000;
    width: 100%;
	height: 65px;
	display: flex;
	justify-content: space-between;
`;

export const NavLink = styled(Link)`
	color: #FFFFFF;
	display: flex;
	align-items: center;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #8766FF;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
