# Print TODO List

A full-stack local application that lets users create categorized TODO items via a web UI, and sends them to an ESP32-connected thermal printer for instant printing. Optimized for minimal storage and efficient offline workflows.

## Project Structure

```

print-todo-list/
├── client/ # React frontend (todos stored in localStorage)
├── server/ # Node.js backend (WebSocket server to communicate with ESP32)

```

## Client (React)

- Built with **React + styled-components**
- TODOs saved in **localStorage**
- Features:
  - 📸 Image compression (WebP)
  - 🗂️ Category + location + timestamp
  - 🔍 Search and category filter
  - 🖨️ ESP32 QR Code scanner (camera)
  - ☑️ Responsive sidebar & layout
  - 🔔 Integrated with `react-toastify`
- No login required. Works offline-first.

### Local Setup

```bash
cd client
npm install
npm run dev  # or npm start
```

## Server (Node + WebSocket)

- Uses **Express.js** and **ws** for real-time communication
- Designed for **LAN/local communication** with one or more ESP32 devices
- Handles:

  - WebSocket broadcast to connected ESP32s
  - Optional HTTP fallback

- Ready for expansion to handle file persistence or queuing

### Local Setup

```bash
cd server
npm install
node index.js
```

## ESP32 Communication (via WebSocket)

- The ESP32 connects to the Node server via WebSocket and listens for print messages
- Messages contain:

  - Text
  - Timestamp
  - Optional compressed image in Base64

Sample JSON:

```json
{
	"type": "print",
	"payload": {
		"text": "Buy groceries",
		"category": "personal",
		"location": "Home",
		"imageUrl": "data:image/webp;base64,..."
	}
}
```

## Storage

- **Client** stores all TODOs locally using `localStorage`
- Automatically prunes old items older than 24 hours
- Optional sync with backend is possible via API if desired

## Tech Stack

| Layer   | Tech                      |
| ------- | ------------------------- |
| UI      | React, styled-components  |
| Icons   | lucide-react, react-icons |
| Alerts  | react-toastify            |
| Backend | Node.js, Express, ws      |
| Print   | ESP32 + WebSocket client  |

## License

[MIT](./LICENSE) — open source and yours to modify freely.

## Future Ideas

- Webhook for remote triggering print jobs
- QR code login for users
- Multi-printer support
- Offline-first PWA support
- Device management dashboard
