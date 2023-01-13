const http = require('http');

exports.getLogin = (req, res, next) => {
    res.render('pages/login', { title: 'Login' });
};


exports.postLogin = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const postData = JSON.stringify({ username: username, password: password });
    const options = {
        hostname: 'localhost',
        port: 7000,
        path: '/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
        }
    };

    const result = http.request(options, (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            console.log(`Response: ${chunk}`);
        });
        response.on('end', () => {
            console.log('No more data in response.');
        });
    });

    result.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    result.write(postData);
    result.end();
};
