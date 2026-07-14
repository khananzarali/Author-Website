import { useNavigate } from "react-router-dom";

function Home (){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    };

    return(
        <>
        <h1>Home</h1>
        <p> this is home</p>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Home;