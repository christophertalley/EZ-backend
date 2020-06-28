const express = require("express");
const {checkJwt} = require("../auth");
const { asyncHandler } = require("../utils");
const router = express.Router();

// This route wil be used to submit a form from anyone with the link
router.post('/forms/:formId/data', asyncHandler(async(req, res, next)=>{
    const newFormResponse = req.body;
    const client = req.db;
    try {
        const result = await client.db("ez-api").collection("formData").insertOne({...newFormResponse});
        res.status(200).send({ formDataId: result.insertedId})
    } catch (e) {
        console.error(e);
    }
}));

// This route will be used by the creator to see all of the data submitted
// for a specific form
router.get('/forms/:formId/data', checkJwt, (req, res, next)=> {

});

module.exports = router;
