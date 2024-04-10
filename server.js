const http = require('http');
const app = require('./app');
const CONSTANTS = require('./constants');

const server = http.createServer(app);

server.listen(CONSTANTS.PORT, () => {
  console.log(`Server started on port ${CONSTANTS.PORT}`);
});


