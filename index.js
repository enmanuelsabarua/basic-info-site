const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});

    const index = fs.readFileSync('index.html', { encoding: 'utf8' });
    const about = fs.readFileSync('about.html', { encoding: 'utf8' });
    const contactMe = fs.readFileSync('contact-me.html', { encoding: 'utf8' });
    const pageNotFound = fs.readFileSync('404.html', { encoding: 'utf8' });

    switch (req.url) {
        case '/about':
            res.write(about);
            break;
        case '/contact-me':
            res.write(contactMe);
            break;
        case '/about':
            res.write(about);
            break;
        case '/':
            res.write(index);
            break;
    
        default:
            res.write(pageNotFound);
            break;
    }

    res.end();
}).listen(8080);