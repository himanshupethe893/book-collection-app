// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to SQLite database
const db = new sqlite3.Database('goodreads.db');

app.use(bodyParser.json());

app.get('/api/books', (req, res) => {
  // Query all books from the SQLite database
  db.all('SELECT * FROM books', (err, rows) => {
    if (err) {
      console.error('Error querying books:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
