const http = require('http');
const server = http.createServer((req, res) => res.end('OpenClaw Bot is alive!\n'));
server.listen(process.env.PORT || 3000, () => console.log('Dummy web server running on port ' + (process.env.PORT || 3000)));