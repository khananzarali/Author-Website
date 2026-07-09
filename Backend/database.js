const express = require("express");
const app = express();
const { Pool, Query } = require("pg");
require("dotenv").config();
const jwt=require("jsonwebtoken")


const pool=new Pool({
    user:process.env.USER,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.DATABASE_PORT
})


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const result = await pool.query(
        "SELECT * FROM users WHERE user_name = $1",
        [username]
    );

    const user = result.rows[0];

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    if (user.password !== password) {
        return res.status(401).json({
            message: "Wrong password"
        });
    }

    return res.status(200).json({
        message: "Login successful"
    });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});