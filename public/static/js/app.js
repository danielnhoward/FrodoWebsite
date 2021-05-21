const $ = (id) => document.getElementById(id);

(async () => {
    const status = $('botStatus');
    const {members} = await (await fetch('https://discordapp.com/api/guilds/734752290300493866/widget.json')).json();
    members.forEach((member) => {
        if (member.username == 'Frodo') return status.innerHTML = 'Online';
    });
    status.innerHTML != 'Online' ? status.innerHTML = 'Offline' : null;
})();