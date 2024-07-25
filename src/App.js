import {Route,Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/RegisterForm/RegisterForm";
import Navigation from './components/Navigation/Navigation'
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Details/Details"
function App() {
  return (
    <div className="App">

<Details/>
     {/*<Routes>*/}
     {/*    <Route path="/" element={<LoginForm/>}/>*/}
     {/*    <Route path="/register" element={<Register/>}/>*/}
     {/*    <Route path="/navigation" element={<Navigation/>}/>*/}
     {/*    <Route path="/home" element={<Home/>}/>*/}
     {/*    <Route path="/search" element={<Search/>}/>*/}
     {/*    <Route path="/profile" element={<Profile/>}/>*/}
     {/*</Routes>*/}
    </div>
  );
}

export default App;
