import {Route,Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Register from "./components/RegisterForm/RegisterForm";
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
     <Routes>
         <Route path="/" element={<LoginForm/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/navigation" element={<Navigation/>}/>

     </Routes>
    </div>
  );
}

export default App;
