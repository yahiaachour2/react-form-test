const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    try {
        const data = req.body;

        if (!data.email) {
            return res.status(400).send({ error: 'email is mandatory' });
        }

        return res.json({ ok: true });
    } catch (error) {
        return res.status(400).send({ error: 'malformed request' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
