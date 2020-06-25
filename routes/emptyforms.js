const express = require("express");
const {checkJwt} = require("../auth");
const {asyncHandler} = require("../utils");
const { ObjectID } = require("mongodb");

const router = express.Router();

// This will be the route to get the empty form to be completed
router.get('/forms/:formId', asyncHandler (async (req, res, next)=>{
    console.log(req.params);

    const formId = req.params.formId;
    console.log(formId);
    const objId = new ObjectID(formId);
    const client = req.db;
    try {
        const form = await client.db("ez-api").collection("emptyForms").findOne({ _id: objId});
        res.status(200).send({form})
    } catch (e) {
        console.error(e);
    }
}));

// This route will be used to get all forms for a user
router.get('/forms', checkJwt, (req, res, next)=> {

})

// This will be the route to create a new form
router.post('/forms', checkJwt, asyncHandler(async (req, res, next)=> {
    const {title, desc, formData, userId } = req.body;
    const client = req.db;

    try {
        const result = await client.db("ez-api").collection("emptyForms").insertOne({title, desc, formData, userId});
        res.status(201).send({formId: result.insertedId})
    } catch (e) {
        console.error(e);
    }
}));

// This will be the route to update a specific form's details
router.put('/forms/:formId', checkJwt, (req, res, next)=> {

});

router.delete('/forms/:formId', checkJwt, (req, res, next)=> {

});

module.exports = router;
