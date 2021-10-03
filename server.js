import Topgg from '@top-gg/sdk';
import fetch from 'node-fetch';
import express from 'express';
import http from 'http';
import fs from 'fs';
import {__dirname} from './dirname.cjs';

const topggWebhook = new Topgg.Webhook(process.env.TOPGGAUTH);

let votes = [];

(async () => {
    try {
        const voters = await (await fetch('https://top.gg/api/bots/734746193082581084/votes', {
            headers: {
                "Authorization": process.env.TOPGGTOKEN,
            }
        })).json();
        voters.forEach((user) => {
            votes.push(user.id);
        });
    }
    catch(err) {
        votes = {error: true};
    }
})();

const app = express();
const server = http.createServer(app);
const pages = ['/', '/announcements', '/announcements/', '/feedback', '/feedback/', '/commands', '/commands/', '/thanks', '/thanks/'];

app.use((req, res, next) => {
    if ((req.get('X-Forwarded-Proto') !== 'https' && req.get('Host') === 'frodo.fun') || req.get('Host') === 'www.frodo.fun' || req.get('Host') === 'frodowebsite.herokuapp.com') return res.redirect(`https://frodo.fun${req.url}`);
    else if (req.get('Host') === 'i.frodo.fun' || req.get('Host') === 'invite.frodo.fun') res.redirect('https://discord.com/oauth2/authorize?client_id=734746193082581084&permissions=268822608&scope=bot%20applications.commands');
    else if (req.get('Host') === 'slash.frodo.fun') res.redirect('https://discord.com/api/oauth2/authorize?client_id=734746193082581084&scope=applications.commands');
    else if (req.get('Host') === 'help.frodo.fun') res.redirect('https://frodo.fun/feedback');
    else if (req.get('Host') === 'support.frodo.fun') res.redirect('https://discord.gg/dQhYjvTud7');
    else next();
});


app.get('*', (req, res) => {
    let url = req.url.split('?')[0];
    let file;

    if (url == '/votes.json') {
        return res.status(200).json(votes);
    } 
    else if (/\./.test(url) && !url.includes('index.html')) {
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

let sockets = [];

app.post('/api/votes', topggWebhook.listener((vote) => {
    if (votes.error) return;
    try {
        votes.push(vote.user);
        sockets.forEach((socket) => {
            socket.send(JSON.stringify({payload: 'vote', data: vote.user}))
        });
    }
    catch(err) {
        votes = {error: true};
    }
}));

server.listen(process.env.PORT || 80, () => console.log(`Server opened on port ${process.env.PORT || 80}`));


import {WebSocketServer} from 'ws';
const wsServer = new WebSocketServer({
    server,
});

wsServer.on('connection', (socket) => {
    console.log('Web socket initiallised');
    socket.on('message', (message) => {
        const [title, content] = message.toString().split(':');

        switch (title) {
        case 'init':
            if (content === process.env.TOPGGAUTH) {
                sockets.push(socket);
                socket.send(JSON.stringify({payload: 'Authed'}));
            }
            else {
                socket.close();
            }
        break;
        case 'votes':
            if (sockets.includes(socket)) {
                socket.send(JSON.stringify({payload: 'votes', data: votes}));
            }
            else {
                socket.close();
            }
        break;
        case 'ping':
            socket.send(JSON.stringify({payload: 'pong'}));
        }
    });

    socket.on('close', () => {
        sockets = sockets.filter(s => s !== socket);
    });
});