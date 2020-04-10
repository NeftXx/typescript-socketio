import Application from "./app";
import SocketConnector from "./connector";

const SERVER_PORT = 3000;

let app = new Application(SERVER_PORT);
let socketConnector = new SocketConnector();

socketConnector.on(app.server);
app.start();
