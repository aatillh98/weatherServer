const express = require('express');
const axios = require('axios');
// const fetch = require('node-fetch');

let router = express.Router();

router.get('/:location', async (req, res) => {
    const location = req.params.location;

    const url = "https://www.metaweather.com/api/location/search/?query=" + location;

    let woeid;

    const { data } = await axios.get(url);

    woeid = data[0]?.woeid;
    let url2 = 'https://www.metaweather.com/api/location/' + woeid + '/';

    const response2 = await axios.get(url2);
    try {
       if(response2) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(response2.data)
    } 
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;