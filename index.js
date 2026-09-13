const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get('/to-do', (req, res) => {
    res.status(200).send({
        id: 1,
        title: 'Food shop',
        priority: 'medium',
        completed: false
        }
    );
});

app.post('/to-do:id', (req, res) => {
    const { id } = req.params;
    const { title, priority, completed } = req.body;

    if (!title || !priority || completed === undefined) {
        res.status(418).send({
            error: 'Request ID, title, priority and completed state are required'
        });
    }
    res.send({
        id,
        title,
        priority,
        completed
    })
});
