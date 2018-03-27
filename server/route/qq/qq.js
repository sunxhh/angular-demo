let express = require('express');
let router = express.Router();
let axios = require("axios");

router.all('/musicu', function(req, res, next) {
    var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';
    axios.get(url, {
        headers: {
            'referer': 'https://y.qq.com/?ADTAG=myqq'
        },
        params: req.query
    }).then((response) => {
        res.send(JSON.stringify(response.data));
    }, (response) => {
        res.send(JSON.stringify(response));
    });
});

module.exports = router;