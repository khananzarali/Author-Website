import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Writings from "./components/Writings";
function App(){
  return(
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Writings">Writings</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Writings" element={<Writings/>}></Route>
    </Routes>
    </>
  )
}
export default App;