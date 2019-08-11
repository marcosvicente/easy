import express from 'express';
var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Home page",
        version: "0.0.1"
    });
});

module.exports = router;
