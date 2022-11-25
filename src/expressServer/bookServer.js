'use strict';

const http = require('http');

const port = process.env.PORT || 3030;
const host = process.env.HOST || "localhost";

const { getAllBooks, getBook } = require('./bookStorage');

const server = http.createServer((req, res) => {
    const {
        pathname,
        searchParams
    } = new URL(`http://${req.headers.host}${req.url}`);

    const route = decodeURIComponent(pathname);

        let result = [];

        if (route === '/books') {
            result = getAllBooks();
        }
        else if(route === '/search/byauthor'){
            result = getBook('author', searchParams.get('value'));
        }
        else if(route === '/search/bytitle'){
            result = getBook('title', searchParams.get('value'));
        }
        else{
            result = {message: "page not found"};
        }

        res.writeHead(200,{ 
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });

        res.end(JSON.stringify(result,null,2));
})

server.listen(port,host, ()=>console.log(`Server running on ${host} port ${port}`));