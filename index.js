const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', require('./routes/login'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
