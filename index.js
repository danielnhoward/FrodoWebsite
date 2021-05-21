const app = require('express')();
const server = require('http').createServer(app);
const fs = require('fs');

app.get('/*', (req, res) => {
    let readFile = true;
    let url = req.url.split('?')[0];
    let file;

    /\./.test(url) ? file = `./public${url}` : file = `./public${url}/index.html`;
    readFile ? (fs.existsSync(file) ? res.sendFile(`${__dirname}${file.replace('.', '')}`) : res.status(404).redirect('/')) : false;
});

server.listen(process.env.PORT || 80, () => console.log(`Server opened on port ${process.env.PORT || 80}`));