const app = require('express')();
const server = require('http').createServer(app);
const fs = require('fs');
const pages = ['/', '/announcements', '/announcements/', '/feedback', '/feedback/', '/commands', '/commands/', '/thanks', '/thanks/'];

app.use((req, res, next) => {
    if ((req.get('X-Forwarded-Proto') !== 'https' && req.get('Host') === 'frodo.fun') || req.get('Host') === 'www.frodo.fun' || req.get('Host') === 'frodowebsite.herokuapp.com') return res.redirect(`https://frodo.fun${req.url}`);
    else if (req.get('Host') === 'i.frodo.fun' || req.get('Host') === 'invite.frodo.fun') res.redirect('https://discord.com/api/oauth2/authorize?client_id=734746193082581084&permissions=268691536&redirect_uri=https%3A%2F%2Ffrodo.fun%2Fthanks&scope=bot%20applications.commands');
    else next();
});

app.get('*', (req, res) => {
    let url = req.url.split('?')[0];
    let file;

    if (/\./.test(url) && !url.includes('index.html')) {
        file = `./build${url}`;
    }
    else {
        if (pages.includes(url)) {
            file = `./build/index.html`
        }
        else {
            return res.status(404).sendFile(`${__dirname}/build/index.html`);
        };
    };

    let fileExists = fs.existsSync(file);
    res.status(fileExists ? 200 : 404);
    res.sendFile(fileExists ? `${__dirname}${file.replace('.', '')}` : `${__dirname}/build/index.html`);
});

server.listen(process.env.PORT || 80, () => console.log(`Server opened on port ${process.env.PORT || 80}`));