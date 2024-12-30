import {Link, useNavigate} from 'react-router-dom';
import '../css/login_signIn.css';
import {useInput} from '../hooks/signin-input.js';
import ValidationAlert from '../components/ValidationAlert.js'
import {postSignUp} from '../Service/api.js'
import axios from 'axios'

export function SignUp(){

    //useInput() -> 회원가입에 입력하는 값들을 다루는 userhooks
    const navigate = useNavigate();
    const categories = ['경영·사무·금융·보험직', 
                        '연구직·공학 기술직', 
                        '교육·법률·사회복지·경찰·소방직·군인', 
                        '보건·의료직',
                        '예술·디자인·방송·스포츠직',
                        '미용·여행·숙박·음식',
                        '영업·판매·운전·운송직',
                        '건설·채굴직',
                        '설치·정비·생산직',
                        '농림어업직'
    ];
    const [input, inputChange,validation, setValidation] = useInput();

    const userData = {
        userId: input.inputId,
        userPwd: input.inputPwd,
        userCorrectPwd: input.inputCorrectPwd,
        userEmail: input.inputEmail,
        userNickName: input.inputNickName,
        userCategory: input.inputCategory,
        userState: false
    }

    const onSubmit = (e)=>{
        if(!userData.userId || !userData.userPwd || !userData.userEmail || 
           !userData.userNickName || !userData.userCategory || !userData.userCorrectPwd
        ){
            alert("모든 항목을 작성해주세요!")
        }
        else if(validation.checkId === false || validation.checkPwd === false || validation.checkCorrectPwd  === false || 
           validation.checkEmail === false || validation.checkNickName === false || validation.checkCategory === false
        ){
            alert("모든 항목을 올바르게 입력하였는지 확인해주세요!")
        }
        else{
            postSignUp(e,userData);
            navigate('/login');
            
        }
    }

    const onCheckId = async (e)=>{
        e.preventDefault();
        const users = await axios.get("http://localhost:3001/user");
        
        users.data.forEach(function(user){
            if(user.userId === userData.userId){
                setValidation(prev=>({...prev, alertId: "이미 존재하는 아이디가 있습니다!", checkId:false}))
            }else{
                setValidation(prev=>({...prev, alertId: "사용가능한 아이디입니다!" ,checkId:true}))
            }
        })
    }

    const onCheckNickName = async (e)=>{
        e.preventDefault();
        const users = await axios.get("http://localhost:3001/user");
        
        users.data.forEach(function(user){
            if(user.userNickName === userData.userNickName){
                setValidation(prev=>({
                    ...prev, 
                    alertNickName: "이미 존재하는 닉네임이 있습니다!", 
                    checkNickName:false}
                ))
            }
            else{
                setValidation(prev=>({...prev, 
                    alertNickName: "사용가능한 닉네임입니다!", 
                    checkNickName:true}
                ))
            }
        })
    }

    const scrollUpdate = ()=>{
        window.scrollTo(0,0);
    };

    return(
        <div className="page">
            <div className="home-link">
                <Link to="/" style={{ textDecoration: "none", color:"black"}}><p>Career With</p></Link>
            </div>    

            <div className="content-id">
                <div className="title">
                    아이디
                </div>
                <div className="content-input">
                    <input className="input" name="inputId" value={input.inputId} onChange={inputChange} type='text'></input>
                </div>
                {/* ValidationAlert -> 입력한 회원 정보 유효성 검사 components
                */ }
                <ValidationAlert 
                    input={input.inputId} 
                    validation={validation.alertId} 
                    check={validation.checkId}
                ></ValidationAlert>
                <div className="input-check">
                    <button className="check-button dup" onClick={onCheckId}>중복 확인</button>
                </div>
                <div style={{clear:`both`}}></div>

            </div>

            <div className="content-pwd">
                <div className="title">
                    비밀번호
                </div>
                <div className="content-input">
                    <input type="password" name="inputPwd" value={input.inputPwd} onChange={inputChange} className="input"></input>
                </div>
                
                <ValidationAlert 
                    input={input.inputPwd} 
                    validation={validation.alertPwd} 
                    check={validation.checkPwd}
                ></ValidationAlert>
            </div>

            <div className="content-pwd-check">
                <div className="title">
                    비밀번호확인
                </div>
                <div className="content-input">
                    <input type="password" name="inputCorrectPwd" value={input.inputCorrectPwd} onChange={inputChange} className="input"></input>
                </div>
                
                <ValidationAlert 
                    input={input.inputCorrectPwd} 
                    validation={validation.alertCorrectPwd} 
                    check={validation.checkCorrectPwd}
                ></ValidationAlert>
            </div>

            <div className="content-nickname">
                <div className="title">
                    닉네임
                </div>
                <div className="content-input">
                    <input className="input" name="inputNickName" value={input.inputNickName} onChange={inputChange} ></input>
                </div>
                <ValidationAlert 
                    input={input.inputNickName} 
                    validation={validation.alertNickName} 
                    check={validation.checkNickName}
                ></ValidationAlert>
                <div className="input-check">
                    <button className="check-button dup" onClick={onCheckNickName}>중복 확인</button>
                </div>
                <div style={{clear:`both`}}></div>
            </div>

            <div className="content-email">
                <div className="title">
                    이메일
                </div>
                <div className="content-input">
                    <input className="input" name="inputEmail" value={input.inputEmail} onChange={inputChange}></input>
                </div>
                <ValidationAlert 
                    input={input.inputEmail} 
                    validation={validation.alertEmail} 
                    check={validation.checkEmail}
                ></ValidationAlert>
            </div>

            <div className="content-category">
                <div className="title">
                    준비중인 분야
                </div>
                <div className="category">
                    <select className="dropdown" 
                    name='inputCategory'
                    value={input.inputCategory} 
                    onChange={inputChange}>
                        <option value="">직종을 선택하세요</option>
                        {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                        ))}
                    </select>    
                </div>
                <ValidationAlert
                    input={input.inputCategory}
                    validation={validation.alertCategory}
                    check={validation.checkCategory}  
                > </ValidationAlert>
            </div>

            <div className="check">
                <Link to="/" onClick={scrollUpdate}><button className="check-button">취소</button></Link>
                <button className="check-button" onClick={onSubmit}>완료</button>
            </div>
        </div>
    )
}

export default SignUp