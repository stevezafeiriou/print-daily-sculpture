// src/components/TodoFeed/TodoFeedElements.js
import styled from "styled-components";

export const FeedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const FeedCard = styled.div`
	background: #ffffff;
	border-radius: 12px;
	padding: 1rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
	transition: box-shadow 0.2s ease-in-out;

	&:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
	}
`;

export const FeedHeader = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;

	.date {
		padding: 0.15rem 0.5rem;
		color: #64748b;
	}

	.category {
		background: #f8fafc;
		padding: 0.15rem 0.5rem;
		border-radius: 12px;
		color: #64748b;
	}
`;

export const FeedImage = styled.img`
	width: 90px;
	height: 90px;
	object-fit: cover;
	border-radius: 10px;
	background: #f1f5f9;
`;

export const FeedText = styled.p`
	font-size: 0.9rem;
	padding: 0 0.5rem;
	color: #1e293b;
	word-break: break-word;
`;

export const FeedFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.75rem;
	padding: 0 0.5rem;
	color: #64748b;
	margin-top: 1rem;
`;

export const MetadataGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;
