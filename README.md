Project Title: Video Streaming App 🎬

Welcome to the Video Streaming App, a comprehensive platform where users can watch their favorite videos, manage playlists, interact in real-time with other users, and much more. This app leverages NestJS for the backend and React for the frontend, with robust features like real-time notifications, interactive playlists, and personalized rooms!

🚀 Features

    📽️ Video Streaming: Stream your favorite videos with a smooth and intuitive interface.
    🎧 Playlists: Create and manage personalized playlists with ease.
    🖥️ Real-Time Rooms: Interact with other users in real-time within shared rooms.
    🔔 Notifications: Stay updated with real-time notifications about activities and updates.
    🔐 Authentication: Secure user authentication to manage profiles and personal data.

⚙️ Installation Guide
🛠️ Backend Setup

    Clone the repository:

git clone https://github.com/hanane987/Watch_together.git

Navigate to the backend folder:

cd backend

Install dependencies:

npm install



💻 Frontend Setup

    Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the frontend:

    npm start



npm run start:dev

🛠️ Tech Stack

    Backend:
        🧑‍💻 NestJS
        ⚡ WebSockets (for real-time communication)
        📚 TypeORM (for database management)

    Frontend:
        ⚛️ React (UI Framework)
        🔵 Redux (State Management)
        🎨 Material UI (Component Library)


🧑‍💻 API Endpoints
🎬 Video Streams

    GET /videos: List all available videos.
    POST /videos/upload: Upload a new video to the platform.
    GET /videos/:id: View a specific video.

🎧 Playlists

    GET /playlists: Retrieve all playlists.
    POST /playlists: Create a new playlist.
    PUT /playlists/:id: Update a playlist.

🖥️ Rooms

    GET /rooms: List all active rooms.
    POST /rooms: Create a new room.
    GET /rooms/:id: Join a specific room.
