const ws = require('ws')
const wss = new ws.Server({
    port:5000,
}, () => console.log(`server started on 5000 port`))


wss.on('connection', function connection(ws) {
    ws.on('message', function(message) {
        message = JSON.parse(message);
        switch(message.event) {
            case 'message':
            broadcastMessage(message)
            break;
            case 'connection':
            broadcastMessage(message)
            break;
        }
    })
})
const message = {
    event:'message/connection',
    id:1,
    date: '24.03.2022',
    username: 'Sentry',
    message:'some message'
}

function broadcastMessage(message){
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}
