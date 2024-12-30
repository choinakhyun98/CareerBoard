import '../css/login_signIn.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios';

function Login(){

   const navigate = useNavigate();
   const [userLogin, setUserLogin] = useState({
      loginId: '',
      loginPwd: '',
   })

   const loginInputChange = ((e)=>{
      const {name, value} = e.target;
      setUserLogin(prev=>({
         ...prev,
         [name] : value,
      }));
   })

   //로그인 버튼 클릭 시 로그인 가능여부 확인 및 로그인 시행
   const onUserLogin = (async ()=>{

      if(userLogin.loginId === '' || userLogin.loginPwd === ''){
         alert('아이디, 비밀번호를 입력해주세요')
      }else{
         // user데이터를 가져와서 입력한 아이디와 비밀번호가 있는지 find 함수를 통해 확인하고 해당하는
         // 아이디와 비밀번호가 해당하는 user의 고유 id가 같은지 확인해서 다르면 경고문을 띄어주고
         // 맞다면 홈 화면으로 이동하면서 user의 nickname을 props로 보내주어 navbar에 유저 닉네임을 띄어줄 수 있도록함.
         const users = await axios.get('http://localhost:3001/user')
         const correctId = users.data.find(user=>user.userId===userLogin.loginId)
         const correctPwd = users.data.find(user=>user.userPwd===userLogin.loginPwd)
         if(correctId === undefined || correctPwd === undefined || correctId.id !== correctPwd.id){
            alert('아이디, 비밀번호가 맞는지 확인해주세요')
         }else{
            const userData = JSON.parse(JSON.stringify(correctId))
            sessionStorage.setItem("id",userData.id)
            navigate('/',{state: userData.userNickName})
         }
      }
   
   })

   //enter키를 누를면 동일하게 로그인이 진행되도록함.
   const onEnter = (e) => {
      if(e.keyCode === 13){
         onUserLogin();
      }
   }

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
            <input className="input" name="loginId" value={userLogin.loginId} type='text' onChange={loginInputChange}></input>
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
            <input type="password" className="input" name='loginPwd' value={userLogin.loginPwd} onChange={loginInputChange} onKeyDown={onEnter}></input>
         </div>
         <div className="login-guide">
            <a href="search-pwd">비밀번호를 잊어버리셨나요?</a>
         </div>
      </div>
      
      <div className="login-btn">
         <button onClick={onUserLogin}>로그인</button>
      </div>
    
    </div>    
    </>  
 )   
}

export default Login