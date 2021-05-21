const app = require('express')();
const server = require('http').createServer(app);
const fs = require('fs');

app.use((req, res, next) => {
    req.get('X-Forwarded-Proto') !== 'https' && req.get('Host') == 'frodo.fun' ? res.redirect(`https://${req.get('Host')}${req.url}`) : next();
});

app.use((req, res, next) => {
    req.get('Host') == 'frodowebsite.herokuapp.com' ? res.redirect(`https://snakeee.xyz${req.url}`) : next();
});

app.get('/*', (req, res) => {
    let readFile = true;
    let url = req.url.split('?')[0];
    let file;

    /\./.test(url) ? file = `./public${url}` : file = `./public${url}/index.html`;
    readFile ? (fs.existsSync(file) ? res.sendFile(`${__dirname}${file.replace('.', '')}`) : res.status(404).redirect('/')) : false;
});

server.listen(process.env.PORT || 80, () => console.log(`Server opened on port ${process.env.PORT || 80}`));