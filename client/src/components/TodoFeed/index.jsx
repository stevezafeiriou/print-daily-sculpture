import React from "react";
import { useTodos } from "../../context/TodoContext";
import {
	FeedWrapper,
	FeedCard,
	FeedHeader,
	FeedImage,
	FeedText,
	FeedFooter,
	MetadataGroup,
} from "./TodoFeedElements";
import { formatDistanceToNow } from "date-fns";
import { MapPin, Trash2 } from "lucide-react";
import styled from "styled-components";
import { toast } from "react-toastify";

const IconButton = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #ef4444;

	&:hover {
		color: #dc2626;
	}
`;

export default function TodoFeed({
	searchQuery,
	selectedCategory,
	selectedDate,
}) {
	const { todos, removeTodo } = useTodos();

	const filteredTodos = todos
		.filter((todo) => {
			const matchSearch = todo.text
				.toLowerCase()
				.includes(searchQuery.toLowerCase());
			const matchCategory = selectedCategory
				? todo.category === selectedCategory
				: true;
			const matchDate = selectedDate
				? todo.createdAt.startsWith(selectedDate)
				: true;
			return matchSearch && matchCategory && matchDate;
		})
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort newest first

	const handleDelete = (id) => {
		toast.promise(
			new Promise((resolve) => {
				setTimeout(() => {
					// Simulate API remove - replace with actual API call
					removeTodo(id);
					resolve();
				}, 300);
			}),
			{
				pending: "Removing TODO...",
				success: "TODO removed!",
				error: "Failed to delete.",
			}
		);
	};

	if (filteredTodos.length === 0) {
		return (
			<p style={{ textAlign: "center", color: "#94a3b8" }}>No TODOs found.</p>
		);
	}

	return (
		<FeedWrapper>
			{filteredTodos.map((todo) => (
				<FeedCard key={todo.id}>
					<FeedHeader>
						<span className="date">
							{new Date(todo.createdAt).toLocaleDateString()}
						</span>
						<span className="category">{todo.category}</span>
					</FeedHeader>

					{todo.imageUrl ? (
						<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
							<FeedImage src={todo.imageUrl} alt="Todo" />
							<FeedText>{todo.text}</FeedText>
						</div>
					) : (
						<FeedText style={{ marginTop: "1rem" }}>{todo.text}</FeedText>
					)}

					<FeedFooter>
						<MetadataGroup>
							{todo.location && (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "0.25rem",
									}}
								>
									<MapPin size={12} />
									<span>{todo.location}</span>
								</div>
							)}
						</MetadataGroup>

						<MetadataGroup>
							<span>
								{formatDistanceToNow(new Date(todo.createdAt), {
									addSuffix: true,
								})}
							</span>
							<IconButton
								onClick={() => handleDelete(todo.id)}
								aria-label="Delete todo"
							>
								<Trash2 size={16} />
							</IconButton>
						</MetadataGroup>
					</FeedFooter>
				</FeedCard>
			))}
		</FeedWrapper>
	);
}
