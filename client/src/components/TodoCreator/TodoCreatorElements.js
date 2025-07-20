// src/components/TodoCreator/TodoCreatorElements.js
import styled from "styled-components";

export const CreatorCard = styled.div`
	background: #fff;
	padding: 1.5rem;
	border-radius: 12px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	margin-bottom: 1.5rem;
`;

export const OptionsRow = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	margin-top: 0.75rem;
`;

export const OptionButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.4rem;
	padding: 0.5rem 0.75rem;
	border: none;
	border-radius: 8px;
	background-color: #f8fafc;
	color: #475569;
	cursor: pointer;
	font-size: 0.875rem;

	&:hover {
		background-color: #e2e8f0;
	}
`;

export const UploadArea = styled.div`
	margin-top: 1rem;
	padding: 1rem;
	border: 2px dashed #94a3b8;
	border-radius: 12px;
	text-align: center;
`;

export const ImagePreview = styled.img`
	width: auto;
	max-height: 150px;
	border-radius: 8px;
	margin: 0 auto;
`;

export const InputField = styled.input`
	width: 100%;
	padding: 0.5rem 0.75rem;
	border-radius: 8px;
	border: 1px solid #e2e8f0;
	margin-top: 0.75rem;
`;

export const ActionRow = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 1rem;
	border-top: 1px solid #f1f5f9;
	padding-top: 1rem;
`;
