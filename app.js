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

    res.send(`<pre>${dogArt}</pre><p>Это собачк1а111</p>`);
});

app.listen(3000, () => {
    console.log('Сервер слушает на порту 3000');
});
