const express = require("express");
const app = express();
const { Pool, Query } = require("pg");
require("dotenv").config();

const pool=new Pool({
    user:process.env.USER,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.DATABASE_PORT
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await pool.query(
        "SELECT * FROM users WHERE user_name = $1",
        [username]
    );

    if (user.rows.length === 0) {
        return res.status(401).json({
            message: "Invalid username or password",
        });
    }

    if (user.rows[0].password !== password) {
        return res.status(401).json({
            message: "Invalid username or password",
        });
    }

    res.json({
        message: "Login successful",
        user: user.rows[0],
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});