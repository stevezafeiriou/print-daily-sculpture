import styled from "styled-components";

export const FiltersWrapper = styled.div`
	padding: 1rem;
	background: #ffffff;
	border-radius: 12px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
	margin-bottom: 1.5rem;
`;

export const SearchInputWrapper = styled.div`
	position: relative;
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 0.75rem 2.5rem;
	border: 1px solid #e2e8f0;
	border-radius: 8px;
	font-size: 0.95rem;

	&:focus {
		border-color: #1b1d1c;
		outline: none;
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
	}
`;

export const FilterRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: 1rem;
`;

export const CategorySelect = styled.select`
	padding: 0.5rem 0.75rem;
	border: none;
	border-radius: 8px;
	font-size: 0.9rem;
	background-color: #f8fafc;
	color: #334155;
	cursor: pointer;

	&:focus {
		border-color: #1b1d1c;
		outline: none;
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
	}

	&:hover {
		background-color: #e2e8f0;
	}
`;
