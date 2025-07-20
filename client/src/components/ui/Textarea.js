import styled from "styled-components";

const Textarea = styled.textarea`
	width: 100%;
	padding: 0.75rem;
	font-size: 0.9rem;
	border-radius: 8px;
	border: 1px solid #e2e8f0;
	resize: vertical;
	transition: border-color 0.2s;

	&:focus {
		outline: none;
		border-color: #1b1d1c;
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
	}
`;

export default Textarea;
