const { WebSocketServer } = require("ws");
const crypto = require("crypto"); //😎

const Clients = [];

var server = new WebSocketServer({ port: 1255, path: "/ws" });
server.on("connection", (con) => {
    con.on("message", (mes) => {
        const data = JSON.parse(mes);

        switch (data.action) {
            case "connected": {
                const ClientData = {
                    id: crypto.randomBytes(16).toString("hex"),
                    deviceType: data.deviceType,
                    connection: con,
                };
                Clients.push(ClientData);
                con.send(
                    JSON.stringify({
                        action: "id-assign",
                        id: ClientData.id,
                    })
                );
                console.log(
                    "client connected (%s) (%s)",
                    data.deviceType,
                    ClientData.id
                );
                break;
            }
            case "disconnected": {
                console.log("client disconnected (%s)", data.deviceType);
                Clients.splice(
                    Clients.findIndex((c) => c.id === data.id),
                    1
                );
                break;
            }
            case "message": {
                console.log(
                    "message received (%s) (%s)",
                    data.deviceType,
                    data.id
                );
                var message = {
                    action: "message",
                    sender: data.id,
                    message: data.message,
                };
                Clients.forEach((c) => {
                    if (c.deviceType === data.deviceType) {
                        c.connection.send(JSON.stringify(message));
                    }
                });
                break;
            }
        }
    });
});
