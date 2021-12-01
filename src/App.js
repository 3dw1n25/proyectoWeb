import './App.css';
import Inicio from './pages/Inicio';
import Login from './pages/LogIn';
import Redirect from './pages/Redirect'
import NotFound from './pages/notFound';
import User from './pages/user/User';
import UserFavs from './pages/user/UserFavs';
import Admin from './pages/admin/Admin';
import AdminFavs from './pages/admin/AdminFavs';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Redirect" element={<Redirect />} />
        <Route path="/User" element={<User />}></Route>
        <Route path="/UserFavs" element={<UserFavs />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/AdminFavs" element={<AdminFavs />}></Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
