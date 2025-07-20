// printer-server/index.js
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let connectedClients = [];

wss.on("connection", (ws) => {
	console.log("ESP32 connected");
	connectedClients.push(ws);

	ws.on("close", () => {
		console.log("ESP32 disconnected");
		connectedClients = connectedClients.filter((client) => client !== ws);
	});
});

// Endpoint for React App to send new TODOs
app.post("/send-todo", (req, res) => {
	const { text, imageUrl, location, category } = req.body;

	const payload = {
		text,
		imageUrl,
		location,
		category,
		timestamp: new Date().toISOString(),
	};

	// Broadcast to all connected ESP32 clients
	connectedClients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(JSON.stringify(payload));
		}
	});

	res.json({ status: "sent" });
});

server.listen(3001, () => {
	console.log("Server listening on http://localhost:3001");
});
