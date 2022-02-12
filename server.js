
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* Configure body-parser */
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());

/** config cors */
const cors = require('cors');
var corsOptions = {
    origin: '*', // Replace with domain
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

/** import routes */ 
const userRoute = require('./src/routes/user.routes');

/** use routes */
app.use('/', userRoute);

/** initial server */ 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`run serve: ${PORT}`)
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});