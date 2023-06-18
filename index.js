const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
// const flash = require('express-flash');
const route = require('./routers');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// app.use(flash());    
app.use(route);

app.set("view engine", "ejs");


app.listen(3000, () => {
    console.log("Running on localhost:3000");
});