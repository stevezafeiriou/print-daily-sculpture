export const getTodos = () => {
	const todos = localStorage.getItem("todos");
	return todos ? JSON.parse(todos) : [];
};

export const saveTodo = (todo) => {
	const todos = getTodos();
	todos.push(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
};

export const deleteTodo = (id) => {
	const todos = getTodos().filter((t) => t.id !== id);
	localStorage.setItem("todos", JSON.stringify(todos));
};

export const clearOldTodos = () => {
	const now = Date.now();
	const filtered = getTodos().filter(
		(todo) => now - new Date(todo.createdAt).getTime() < 24 * 60 * 60 * 1000
	);
	localStorage.setItem("todos", JSON.stringify(filtered));
};
