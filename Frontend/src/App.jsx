import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Writings from "./components/Writings";
import Login from "./components/Login";
function App(){
  return(
    <>
    <nav>
      <Link to="/">Login</Link>
      <Link to="/Writings">Writings</Link>
      <Link to="/Home">Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Writings" element={<Writings/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    </>
  )
}
export default App;