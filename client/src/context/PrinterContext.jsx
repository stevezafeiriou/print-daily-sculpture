// src/context/PrinterContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import {
	getPrinterSettings,
	savePrinterSettings,
	clearPrinterSettings,
} from "../utils/printerStorage";

const PrinterContext = createContext();

export const PrinterProvider = ({ children }) => {
	const [settings, setSettings] = useState(null);

	useEffect(() => {
		const saved = getPrinterSettings();
		if (saved) setSettings(saved);
	}, []);

	const updateSettings = (newSettings) => {
		savePrinterSettings(newSettings);
		setSettings(newSettings);
	};

	const resetSettings = () => {
		clearPrinterSettings();
		setSettings(null);
	};

	return (
		<PrinterContext.Provider
			value={{ settings, updateSettings, resetSettings }}
		>
			{children}
		</PrinterContext.Provider>
	);
};

export const usePrinter = () => useContext(PrinterContext);
