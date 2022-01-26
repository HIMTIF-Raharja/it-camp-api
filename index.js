const http = require('http');
const products = require('./data/products');

const server = http.createServer((req, res) => {
    if(req.url === '/api/products') {
        
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route Not Found'}));
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));