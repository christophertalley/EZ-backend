const express = require("express");
require('dotenv').config();
const cors = require("cors");
const morgan = require("morgan");
const { checkJwt } = require("./auth");
const expressMongoDb = require("express-mongo-db");
const { mongo_user, mongo_pw, port } = require("./config");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const emptyFormRouter = require("./routes/emptyforms");
const formDataRouter = require("./routes/formData");

// Declare URI for connection to Mongo Client
const uri = `mongodb+srv://${mongo_user}:${mongo_pw}@ezcluster-eej30.mongodb.net/ez-api?retryWrites=true&w=majority`;

// Create a new Express app
const app = express();


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(expressMongoDb(uri));
app.use(express.json());

// Routes are always last middleware
app.use(indexRouter);
app.use(userRouter);
app.use(emptyFormRouter);
app.use(formDataRouter);



// Start the app
app.listen(port, () => console.log(`API listening on ${port}`));
