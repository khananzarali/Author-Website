import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
function App(){
  return(
    <>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </>
  )
}
export default App;