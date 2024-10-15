import {Link} from 'react-router-dom';
import '../css/login.css';
import {useInput} from '../hooks/signin-input.js';
import ValidationAlert from '../components/ValidationAlert.js'

function SignIn(){

    //useInput() -> 회원가입에 입력하는 값들을 다루는 userhooks
    
    const categories = ['IT', '공시', '영업', '자영업'];
    const [input, inputChange,validation] = useInput();

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
            </div>

            <div className="check">
                <Link to="/"><button className="check-button">취소</button></Link>
                <Link to="/"><button className="check-button" type="submit">완료</button></Link>
            </div>
        </div>
    )
}

export default SignIn