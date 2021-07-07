const express = require("express");
const app = express();
const router = require('./src/routers/routes')

require('dotenv').config();

const port = process.env.PORT || 3800;

app.use(express.json())

app.use("/new/sql-task",router);

 app.listen(port ,()=>{
        console.log(`server is running on ${port}`)
    })
