// src/components/TodoCreator/index.jsx
import React, { useState, useRef } from "react";
import {
	CreatorCard,
	OptionsRow,
	OptionButton,
	UploadArea,
	ImagePreview,
	ActionRow,
} from "./TodoCreatorElements";
import { useTodos } from "../../context/TodoContext";
import { Image as ImageIcon, MapPin, Tag, X } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import { toast } from "react-toastify";

export default function TodoCreator() {
	const { addTodo } = useTodos();
	const [text, setText] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("");
	const [showUpload, setShowUpload] = useState(false);
	const [showLocation, setShowLocation] = useState(false);
	const [showCategory, setShowCategory] = useState(false);
	const fileInputRef = useRef();

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file || !file.type.startsWith("image/")) return;

		const reader = new FileReader();

		reader.onload = (event) => {
			const nativeImage = new window.Image();
			nativeImage.src = event.target.result;

			nativeImage.onload = () => {
				const MAX_WIDTH = 250;
				const MAX_HEIGHT = 250;
				let { width, height } = nativeImage;

				if (width > height && width > MAX_WIDTH) {
					height *= MAX_WIDTH / width;
					width = MAX_WIDTH;
				} else if (height > MAX_HEIGHT) {
					width *= MAX_HEIGHT / height;
					height = MAX_HEIGHT;
				}

				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;

				const ctx = canvas.getContext("2d");
				ctx.drawImage(nativeImage, 0, 0, width, height);

				// Compress using WebP format at lowest usable quality (0.3)
				let compressedDataUrl;
				try {
					compressedDataUrl = canvas.toDataURL("image/webp", 0.3);
				} catch {
					// Fallback to JPEG if WebP not supported (very rare)
					compressedDataUrl = canvas.toDataURL("image/jpeg", 0.3);
				}
				setImageUrl(compressedDataUrl);
			};
		};

		reader.readAsDataURL(file);
	};

	const handleSubmit = async () => {
		if (!text.trim()) return;

		const newTodo = {
			id: Date.now(),
			text,
			imageUrl,
			location,
			category: category || "general",
			createdAt: new Date().toISOString(),
		};

		addTodo(newTodo);

		// Send to server
		await toast.promise(
			fetch("http://localhost:3001/send-todo", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newTodo),
			}),
			{
				pending: "Sending to printer...",
				success: "Sent to printer!",
				error: "Failed to send to printer",
			}
		);

		setText("");
		setImageUrl("");
		setLocation("");
		setCategory("");
		setShowUpload(false);
		setShowLocation(false);
		setShowCategory(false);
	};

	return (
		<CreatorCard>
			<Textarea
				rows="3"
				placeholder="What needs to be done?"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>

			<OptionsRow>
				<OptionButton onClick={() => setShowUpload(!showUpload)}>
					<ImageIcon size={16} /> Photo
				</OptionButton>
				<OptionButton onClick={() => setShowLocation(!showLocation)}>
					<MapPin size={16} /> Location
				</OptionButton>
				<OptionButton onClick={() => setShowCategory(!showCategory)}>
					<Tag size={16} /> Category
				</OptionButton>
			</OptionsRow>

			{showUpload && (
				<UploadArea>
					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						style={{ display: "none" }}
					/>
					{imageUrl ? (
						<div style={{ position: "relative" }}>
							<ImagePreview src={imageUrl} alt="Uploaded preview" />
							<Button
								onClick={() => setImageUrl("")}
								className="ghost"
								style={{ position: "absolute", top: 5, right: 5 }}
							>
								<X size={16} />
							</Button>
						</div>
					) : (
						<Button
							onClick={() => fileInputRef.current.click()}
							className="outline"
						>
							Choose File
						</Button>
					)}
				</UploadArea>
			)}

			{showLocation && (
				<Input
					placeholder="Add location..."
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
			)}

			{showCategory && (
				<Input
					placeholder="Enter category..."
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
			)}

			<ActionRow>
				<Button onClick={handleSubmit}>Post this!</Button>
			</ActionRow>
		</CreatorCard>
	);
}
