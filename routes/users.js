const express = require("express");
const { asyncHandler} = require('../utils');
const { checkJwt } = require("../auth");

const router = express.Router();

// Auth0 handles authentication for user and provides user info.
// This route is used so that each user has a corresponding id in the
// database for relationships
router.post("/users", checkJwt, asyncHandler(async (req, res, next)=>{
    const {username} = req.body;
    const db = req.db;
    try {
        // Not quite sure why, but the uri points to the admin database and not my api
        // To get this to work you have to state db again after db and then provide
        // the database name.

        // Because the way Mongo works we have to first query to check if the user has been created
        const findResult = await db.db("ez-api").collection("users").findOne({ userName: username });
        if (findResult) {
            res.status(201).send({ userId: findResult._id });
        } else {
            // If the user was not found, we create a new document with the user
            const result = await db.db("ez-api").collection("users").insertOne({userName: username});
            res.status(201).json({ userId: result.insertedId });
        }
    } catch (error) {
        console.error(error);
    };
}));

module.exports = router;
