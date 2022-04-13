import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Login } from './comonents/Login';
//import { SignUp } from './comonents/Signup';
import RestaurantList from './comonents/Home';
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
function App() {
  const isAuthenticated = false;
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <RestaurantList />
            </PrivateRoute>
          }></Route>
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App
