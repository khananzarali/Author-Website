const express = require("express");
const app = express();
const { Pool } = require("pg");
require("dotenv").config();

const pool=new Pool({
    user:process.env.USER,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.DATABASE_PORT
})

app.get("/",async(req,res)=>{
    res.send("hello world");
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});