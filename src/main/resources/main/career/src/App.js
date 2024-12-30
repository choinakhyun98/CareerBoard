import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Home from './pages/Home.js';
import SearchPwd from './pages/SearchPwd.js';
import Board from './pages/Board.js';
import {Routes, Route} from 'react-router-dom';
import './css/App.css';
import './css/login_signIn.css'

function App() {
  return (
    <>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/sign-in' element={<SignUp></SignUp>}></Route>
            <Route path='/search-pwd' element={<SearchPwd></SearchPwd>}></Route>
            <Route path='/board' element={<Board></Board>}></Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
