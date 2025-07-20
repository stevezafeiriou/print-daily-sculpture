// src/utils/printerStorage.js

const STORAGE_KEY = "printerSettings";

export const getPrinterSettings = () => {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : null;
};

export const savePrinterSettings = (settings) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};

export const clearPrinterSettings = () => {
	localStorage.removeItem(STORAGE_KEY);
};
