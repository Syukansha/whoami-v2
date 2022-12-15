const express = require("express");
const cors = require('cors');
const port =process.env.PORT || 5001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser()); 


//routes
const deviceRouter = require("./routes/detectDevice");
app.use('/api',deviceRouter);


app.listen(port,(err)=>{
    if(err) throw err;
    console.log('listening to '+ port)});