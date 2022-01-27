const http = require('http');
const products = require('./data/productsimage');
const productsnoimg = require('./data/products.json');

const server = http.createServer((req, res) => {
    if(req.url === '/api/products') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } else if(req.url === '/api/productsnoimg') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(productsnoimg))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route Not Found'}));
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));