const express = require("express");
require('dotenv').config();
const cors = require("cors");
const morgan = require("morgan");
const { checkJwt } = require("./auth");
const expressMongoDb = require("express-mongo-db");
const { mongo_user, mongo_pw } = require("./config");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");

// Declare URI for connection to Mongo Client
const uri = `mongodb+srv://${mongo_user}:${mongo_pw}@ezcluster-eej30.mongodb.net/ez-api?retryWrites=true&w=majority`;

// Create a new Express app
const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan("dev"));
app.use(expressMongoDb(uri));
app.use(express.json());

// Routes are always last middleware
app.use(indexRouter);
app.use(userRouter);


// Start the app
app.listen(5000, () => console.log('API listening on 5000'));
