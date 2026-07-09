import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");
                console.log(data);
                localStorage.setItem("token", data.token);
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>

            <h4>To login as User</h4>
            <p><strong>Username:</strong> user1</p>
            <p><strong>Password:</strong> password</p>
            <p><strong>Username:</strong> user2</p>
            <p><strong>Password:</strong> password</p>

            <h4>To login as Author</h4>
            <p><strong>Username:</strong> author1</p>
            <p><strong>Password:</strong> password</p>
            <p><strong>Username:</strong> author2</p>
            <p><strong>Password:</strong> password</p>

            <h4>To login as Admin</h4>
            <p><strong>Username:</strong> admin</p>
            <p><strong>Password:</strong> password</p>
        </form>
    );
}

export default Login;