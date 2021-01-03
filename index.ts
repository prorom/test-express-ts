// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

const Server = require ("./server/server");
const RestRoutes = require("./routes/restRoutes");
const restApiController = require("./controllers/restApiController");

const routes = new RestRoutes(restApiController);
const server = new Server(routes);

server.init();