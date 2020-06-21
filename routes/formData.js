const express = require("express");
const {checkJwt} = require("../auth");

const router = express.Router();

// This route wil be used to submit a form from anyone with the link
router.post('/forms/:formId/data', (req, res, next)=>{

});

// This route will be used by the creator to see all of the data submitted
// for a specific form
router.get('/forms/:formId/data', checkJwt, (req, res, next)=> {

});

module.exports = router;
