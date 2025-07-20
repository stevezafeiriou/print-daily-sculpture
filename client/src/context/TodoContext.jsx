import React, { createContext, useContext, useEffect, useState } from "react";
import {
	getTodos,
	saveTodo,
	deleteTodo,
	clearOldTodos,
} from "../utils/storage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		clearOldTodos();
		setTodos(getTodos());
	}, []);

	const addTodo = (todo) => {
		saveTodo(todo);
		setTodos(getTodos());
	};

	const removeTodo = (id) => {
		deleteTodo(id);
		setTodos(getTodos());
	};

	return (
		<TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodos = () => useContext(TodoContext);
