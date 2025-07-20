import React from "react";
import { Search } from "lucide-react";
import {
	FiltersWrapper,
	SearchInputWrapper,
	SearchInput,
	CategorySelect,
	FilterRow,
} from "./SearchFiltersElements";

export default function SearchFilters({
	searchQuery,
	onSearchChange,
	selectedCategory,
	onCategoryChange,
	categories = [],
}) {
	return (
		<FiltersWrapper>
			<SearchInputWrapper>
				<Search
					style={{
						position: "absolute",
						top: "50%",
						left: "10px",
						transform: "translateY(-50%)",
						color: "#94a3b8",
					}}
					size={16}
				/>
				<SearchInput
					type="text"
					placeholder="Search your todos..."
					value={searchQuery}
					onChange={(e) => onSearchChange(e.target.value)}
				/>
			</SearchInputWrapper>

			<FilterRow>
				<CategorySelect
					value={selectedCategory}
					onChange={(e) => onCategoryChange(e.target.value)}
				>
					<option value="">All Categories</option>
					{categories.map((cat) => (
						<option key={cat} value={cat}>
							{cat}
						</option>
					))}
				</CategorySelect>
			</FilterRow>
		</FiltersWrapper>
	);
}
