import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";
import { PrinterProvider } from "./context/PrinterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<TodoProvider>
		<PrinterProvider>
			<App />
		</PrinterProvider>
	</TodoProvider>
);
