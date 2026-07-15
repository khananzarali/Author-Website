import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home (){
    const navigate = useNavigate();
    const [secretData, setSecretData] = useState(null);

    useEffect(() => {
        const fetchProtectedData = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                const response = await axios.get("http://localhost:5000/api/protected", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setSecretData(response.data);
            } catch (error) {
                console.error("Failed to fetch protected data:", error);
                if (error.response?.status === 401 || error.response?.status === 403) {
                    handleLogout(); // Auto logout on token expiry
                }
            }
        };

        fetchProtectedData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return(
        <>
        <h1>Home</h1>
        <p> this is home</p>
        
        {secretData && (
            <div style={{ padding: "10px", background: "#f0f0f0", margin: "10px 0", borderRadius: "5px" }}>
                <h3>Secret Data from Backend:</h3>
                <p>Message: {secretData.message}</p>
                <p>Data: {JSON.stringify(secretData.data)}</p>
            </div>
        )}

        <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Home;