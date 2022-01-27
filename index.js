const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const router = require('./router');

app.use("/location/", router);

app.use(express.static('public')) //assets files, js files, css files

app.get('/', (req, res) => {
    const date = new Date();
    res.json({ currentTime: date.toTimeString() })
    console.log('Received')
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
});