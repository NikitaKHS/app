const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const dogArt = `
      / \\__
     (    @\\___
     /         O
    /   (_____/
   /_____/   U
`;

    res.send(`<pre>${dogArt}</pre><p>Это собачка</p>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
