// components/ui/Button.js
import styled from "styled-components";

const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 0.9rem;
	border-radius: 8px;
	background-color: #1b1d1c;
	color: white;
	border: none;
	cursor: pointer;
	transition: background 0.2s;

	&:hover {
		background-color: #363a38ff;
	}

	&.outline {
		background: transparent;
		color: #1e293b;
		border: 1px solid #cbd5e1;
	}
`;

export default Button;
