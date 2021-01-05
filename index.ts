import RestApiController from "./controllers/restApiController";
import Server from "./server/server";
import RestRoutes from "./routes/restRoutes";

const restApiController = new RestApiController();
const routes = new RestRoutes(restApiController);
const server = new Server(routes);

server.init();