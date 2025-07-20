// src/components/ui/QrScanner.js
import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import styled from "styled-components";
import Button from "./Button";

const ScannerWrapper = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.8);
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

const VideoBox = styled.div`
	width: 100%;
	max-width: 400px;
	aspect-ratio: 1 / 1;
	background: black;
	border-radius: 12px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;

	#qr-box {
		width: 100%;
		height: 100%;
	}

	#qr-box > video {
		width: 100% !important;
		height: 100% !important;
		object-fit: cover !important;
		border-radius: 12px;
	}
`;

export default function QrScanner({ onDetected, onClose }) {
	const qrRef = useRef();
	const scanner = useRef();

	useEffect(() => {
		scanner.current = new Html5Qrcode("qr-box");

		scanner.current
			.start(
				{ facingMode: "environment" },
				{
					fps: 10,
					qrbox: { width: 250, height: 250 },
				},
				(decodedText) => {
					onDetected(decodedText);
					scanner.current.stop().then(onClose);
				},
				(err) => {
					// ignore scan errors
				}
			)
			.catch((err) => {
				console.error("Failed to start QR scanner", err);
			});

		return () => {
			if (scanner.current) {
				scanner.current.stop().catch(() => {});
			}
		};
	}, []);

	return (
		<ScannerWrapper>
			<VideoBox>
				<div id="qr-box" ref={qrRef}></div>
			</VideoBox>
			<Button onClick={onClose}>Cancel</Button>
		</ScannerWrapper>
	);
}
