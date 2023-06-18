const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
// const flash = require('express-flash');
const router = require('./routers');

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// app.use(flash());    
app.use(router);

app.listen(3000, () => {
    console.log("Running on localhost:3000");
});