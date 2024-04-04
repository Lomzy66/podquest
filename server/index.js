// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.get("/api", (req, res) => {
//     res.json({ message: "Connected to server." });
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });
/***********************************************************************/
// server/index.js

const path = require('path');
const PORT = process.env.PORT || 3001;
const express = require('express');

// Have Node serve the files for out built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Connected to Server" });
});

// All other GET requests not handled before will return our React App
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});