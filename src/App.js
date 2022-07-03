import './App.css';
import Home from './components/Home/Home';
import User from './components/User/User';
import Login from './components/admin/Login'
import {

  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/"
          element={<User />}
        />
        <Route
          path="/admin"
          element={<Login />}
        />
      </Routes>

    </div>



  );

}

export default App;
