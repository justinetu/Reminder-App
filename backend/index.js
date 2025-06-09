const express = require('express'); // imports the Express library. Express is a lightweight framework that makes it easy to build web servers with Node.js.
const cors = require('cors'); // imports the CORS (Cross-Origin Resource Sharing) library. CORS allows your frontend (React app) to talk to your backend if they are on different ports (e.g., React runs on localhost:3000, Express on localhost:5000)
const app = express(); // This initializes your Express application
const PORT = 5000;

app.use(cors()); // This tells Express to enable CORS so your frontend can communicate with your backend without getting blocked by browser security policies.
app.use(express.json()); // This middleware allows your backend to automatically parse incoming JSON data from the client (like a form submission).

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' }); // This defines a GET route at /api/hello. When a client (like your React app) sends a GET request to this endpoint, it responds with a JSON object:
});
  
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // This starts your server and listens for requests on port 5000.
});