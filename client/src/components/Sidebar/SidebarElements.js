import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Container layout
export const PageWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	position: relative;
`;

export const ContentWrapper = styled.div`
	flex: 1;
	padding: 2rem;
	margin-left: 1rem;
	display: flex;
	justify-content: center;

	@media (max-width: 1180px) {
		padding: 1rem;
	}
`;

export const InnerContent = styled.div`
	width: 100%;
	max-width: 700px;
`;

// Sidebar
export const SidebarWrapper = styled.nav`
	width: 240px;
	background: #fff;
	padding: 2rem 1rem;
	height: 100vh;
	border-right: 1px solid #e2e8f0;
	border-top-right-radius: 16px;
	border-bottom-right-radius: 16px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.025);
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	z-index: 1000;

	@media (max-width: 1180px) {
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	}
`;

// Mobile menu toggle button
export const ToggleButton = styled.button`
	position: fixed;
	top: 1rem;
	left: 1rem;
	z-index: 1100;
	background: #f8f8f8;
	padding: 0 0.25rem;
	margin-right: 1rem;
	border-radius: 6px;
	border: none;
	cursor: pointer;

	@media (min-width: 1180px) {
		display: none;
	}
`;

// Dim background overlay when mobile menu is open
export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 999;

	@media (min-width: 1180px) {
		display: none;
	}
`;

export const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const LogoImage = styled.img`
	width: 50px;
	height: 50px;
	background-color: #1b1d1c;
	border-radius: 8px;
	margin: 1.5rem 0.5rem;

	@media screen and (max-width: 1180px) {
		width: 40px;
		height: 40px;
		margin: 1.5rem 0.35rem;
	}
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	font-size: 1rem;

	color: #475569;
	display: block;
	padding: 0.75rem 1rem;
	border-radius: 8px;
	transition: background 0.2s;

	&.active {
		background: #f8fafc;
		font-weight: 600;
		color: #1b1d1c;
	}

	&:hover {
		background: #e2e8f0;
	}
`;

export const IconLabel = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 500;
	font-size: 0.95rem;
`;
