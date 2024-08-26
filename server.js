const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/scrape', (req, res) => {
    const keyword = req.query.keyword || 'test';
    exec(`python scraper.py ${keyword}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send('Something went wrong');
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send('Something went wrong');
        }
        res.send(stdout);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
