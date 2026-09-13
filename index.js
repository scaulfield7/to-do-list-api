const app = require('express')();
const PORT = process.env.PORT || 8080;

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
