import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.js';
import SignIn from './pages/SignIn.js';
import Home from './pages/Home.js';
import SearchPwd from './pages/SearchPwd.js';
import {Routes, Route} from 'react-router-dom';
import './css/App.css';
import './css/login.css';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/search-pwd' element={<SearchPwd></SearchPwd>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
