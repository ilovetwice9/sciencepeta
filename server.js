const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle article form submissions
app.post('/submit-article', (req, res) => {
    const { title, content } = req.body;

    // Handle storing the article in a database (not implemented in this example)

    // Respond with a success message (for demonstration purposes)
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
