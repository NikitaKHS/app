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

    res.send(`<pre>${dogArt}</pre><p>Это соб5ачк1а61111</p>`);
});

app.listen(3000, () => {
    console.log('Сервер слушает на порту 3000');
});
