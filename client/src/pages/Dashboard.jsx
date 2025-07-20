// src/pages/Dashboard.jsx
import React, { useState } from "react";
import TodoCreator from "../components/TodoCreator";
import SearchFilters from "../components/SearchFilters";
import TodoFeed from "../components/TodoFeed";
import SidebarLayout from "../components/Sidebar";
import styled from "styled-components";
import { useTodos } from "../context/TodoContext"; // ⬅️ make sure this is imported

const PageContent = styled.div`
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export default function Dashboard() {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("");

	const { todos } = useTodos();

	// Extract unique, non-empty categories
	const categories = Array.from(
		new Set(todos.map((todo) => todo.category).filter(Boolean))
	);

	return (
		<SidebarLayout>
			<PageContent>
				<TodoCreator />
				<SearchFilters
					searchQuery={search}
					onSearchChange={setSearch}
					selectedCategory={category}
					onCategoryChange={setCategory}
					categories={categories} // ✅ pass here
				/>
				<TodoFeed
					searchQuery={search}
					selectedCategory={category}
					selectedDate={undefined} // ⬅️ calendar removed for now
				/>
			</PageContent>
		</SidebarLayout>
	);
}
