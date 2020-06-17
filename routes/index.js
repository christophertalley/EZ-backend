const express = require("express");
const {checkJwt} = require("../auth");

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Testing index routes"
    })
});

router.get('/private', checkJwt, (req, res) => {
    res.json({
        message: "Testing index routes"
    })
});
module.exports = router;
