import { Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <nav>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;