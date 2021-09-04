export default class {
    constructor(router, ui) {
        this.router = router;
        this.SERVER_URL = 'ws://localhost';
        this.socketConnection = null;
        this.UI = ui;
        this.reconnectTries = -1;
    }

    authenticate() {
        let tokens = localStorage.getItem('app.cotg.ext.tokens');

        if (Array.isArray(tokens)) {
            tokens.forEach(token => {
                let payload = {
                    path: '/authenticate',
                    inGameName: localStorage.getItem('app.cotg.inGameName'),
                    token: token,
                    data: {},
                }

                this.socketConnection.send(JSON.stringify(payload));
            });
        } else {
            let payload = {
                path: '/authenticate',
                inGameName: localStorage.getItem('app.cotg.inGameName'),
                token: tokens,
                data: {},
            }

            this.socketConnection.send(JSON.stringify(payload));
        }
    }

    onMessage(event) {
        let data = JSON.parse(event.data);

        this.UI.snackbar(`New event ${data.path} `);

        this.router.route(data.path, data, this.socketConnection);
    }

    onOpen(event) {
        this.UI.snackbar(`Connected to server.`);

        this.authenticate();
    }

    onClose(event) {
        this.UI.snackbar(`Connection to server lost, reconnecting...`);
        if (this.reconnectTries < 5) {
            this.connect();
        }
    }

    onError(event) {
        this.UI.snackbar(`Something went wrong, reconnecting...`);
        if (this.reconnectTries < 5) {
            this.connect();
        }
    }

    connect() {
        this.reconnectTries++;
        this.socketConnection = new WebSocket(this.SERVER_URL);
        this.socketConnection.onopen = (event) => { this.onOpen(event) };
        this.socketConnection.onclose = (event) => { this.onClose(event) };
        this.socketConnection.onerror = (event) => { this.onError(event) };
        this.socketConnection.onmessage = (event) => { this.onMessage(event) };
    }
}

