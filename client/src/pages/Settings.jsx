import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SidebarLayout from "../components/Sidebar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { FiCamera } from "react-icons/fi";
import QrScanner from "../components/ui/QrScanner";
import { usePrinter } from "../context/PrinterContext";
import { toast } from "react-toastify";

const PageContent = styled.div`
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Section = styled.div`
	background: white;
	padding: 1.5rem;
	border-radius: 12px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const Label = styled.label`
	font-size: 0.9rem;
	font-weight: 500;
	display: block;
	margin-bottom: 0.25rem;
`;

const FieldRow = styled.div`
	display: flex;
	align-items: stretch;
	gap: 0.5rem;
`;

const IconButton = styled.button`
	background-color: transparent;
	color: #475569;
	border: none;
	border-radius: 8px;
	padding: 0 0.75rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;

	&:hover {
		color: #1b1d1c;
	}
`;

export default function Settings() {
	const { settings, updateSettings, resetSettings } = usePrinter();

	const [printerSerial, setPrinterSerial] = useState("");
	const [printerName, setPrinterName] = useState("");
	const [editing, setEditing] = useState(false);
	const [scanning, setScanning] = useState(false);

	useEffect(() => {
		if (settings) {
			setPrinterSerial(settings.serial);
			setPrinterName(settings.name);
			setEditing(false);
		}
	}, [settings]);

	const handleScan = (data) => {
		if (data) {
			setPrinterSerial(data);
			setScanning(false);
		}
	};

	const handleSave = () => {
		if (!printerSerial || !printerName) {
			toast.error("Both serial number and name are required.");
			return;
		}

		toast.promise(
			new Promise((resolve) => {
				setTimeout(() => {
					// Simulate API save - replace with actual API call
					updateSettings({ serial: printerSerial, name: printerName });
					resolve();
				}, 1000);
			}),
			{
				pending: "Saving settings...",
				success: "Printer settings saved!",
				error: "Failed to save settings.",
			}
		);
	};

	const handleCancel = () => {
		if (settings) {
			setPrinterSerial(settings.serial);
			setPrinterName(settings.name);
		}
		setEditing(false);
	};

	const isStored = !!settings;

	return (
		<SidebarLayout>
			<PageContent>
				<h2>ESP32 Printer Settings</h2>

				<Section>
					<div>
						<Label htmlFor="printerSerial">Printer Serial Number</Label>
						<FieldRow>
							<Input
								id="printerSerial"
								value={printerSerial}
								onChange={(e) => setPrinterSerial(e.target.value)}
								placeholder="Scan or enter printer serial"
								disabled={isStored && !editing}
							/>
							<IconButton
								onClick={() => setScanning(true)}
								title="Scan QR Code"
								disabled={isStored && !editing}
							>
								<FiCamera size={20} />
							</IconButton>
						</FieldRow>
					</div>

					<div style={{ marginTop: "1rem" }}>
						<Label htmlFor="printerName">Printer Name</Label>
						<Input
							id="printerName"
							value={printerName}
							onChange={(e) => setPrinterName(e.target.value)}
							placeholder="Name this printer (e.g. Office Printer)"
							disabled={isStored && !editing}
						/>
					</div>

					<div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
						{isStored && !editing ? (
							<Button onClick={() => setEditing(true)}>Edit</Button>
						) : (
							<>
								<Button className="ghost" onClick={handleCancel}>
									Cancel
								</Button>
								<Button onClick={handleSave}>Save</Button>
							</>
						)}
					</div>
				</Section>

				{scanning && (
					<QrScanner
						onDetected={handleScan}
						onClose={() => setScanning(false)}
					/>
				)}
			</PageContent>
		</SidebarLayout>
	);
}
