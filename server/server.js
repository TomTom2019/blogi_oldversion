
const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const bodybarser = require("body-parser");

const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const routes = require("./routes");

const passport = require("passport");
const { jwtStrategy } = require("./middleware/passport");
const { handleError, convertToApiError } = require("./middleware/apiError");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);

// PARSING
app.use(bodybarser.json());

// SANITIZE
app.use(xss());
app.use(mongoSanitize());

//PASSPORT ref=> passport.js
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// ROUTES
app.use("/api", routes);

/// ERROR HANDLER ref=> middleware apiError.js
app.use(convertToApiError);
app.use((err, req, res, next) => {
	handleError(err, res);
});


// HEROKU    GIT OK
app.use(express.static('client/build'))
if(process.env.NODE_ENV === 'production'){
    const path = require('path')

    app.get('/*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'../client','build','index.html'))
    })
}



const port = process.env.PORT || 3002;
app.listen(port, () => {
	console.log(`server running o port ${port}`);
});