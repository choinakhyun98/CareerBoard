import '../css/login.css';
import {Link} from 'react-router-dom';

function Login(){
return(
   <>
   <div className="page">
      <div className="home-link">
         <Link to="/" style={{ textDecoration: "none", color:"black"}}><p>Career With</p></Link>
      </div>
      <div className="content-id">
         <div className="title">
            아이디
         </div>
         <div className="content-input">
            <input className="input"></input>
         </div>
         <div className="login-guide">
            <a href="sign-in">계정이 없으신가요? 회원가입을 통해 이용해보세요!</a>
         </div>

      </div>
      <div className="content-pwd">
         <div className="title">
            비밀번호
         </div>
         <div className="content-input">
            <input type="password" className="input"></input>
         </div>
         <div className="login-guide">
            <a href="search-pwd">비밀번호를 잊어버리셨나요?</a>
         </div>
      </div>
      
      <div className="login-button">
         <button>로그인</button>
      </div>
    
    </div>    
    </>  
 )   
}

export default Login