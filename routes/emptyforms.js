const express = require("express");
const {checkJwt} = require("../auth");
const {asyncHandler} = require("../utils");

const router = express.Router();

// This will be the route to get the empty form to be completed
router.get('/forms/:formId', (req, res, next)=>{

});

// This route will be used to get all forms for a user
router.get('/forms', checkJwt, (req, res, next)=> {

})

// This will be the route to create a new form
router.post('/forms', checkJwt, (req, res, next)=> {

});

// This will be the route to update a specific form's details
router.put('/forms/:formId', checkJwt, (req, res, next)=> {

});

router.delete('/forms/:formId', checkJWt, (req, res, next)=> {

});
