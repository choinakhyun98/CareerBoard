import {Link} from 'react-router-dom';
import '../css/login.css';
import {useState} from 'react';

function SignIn(){

    const [category, setCategory] = useState('');
    const categories = ['IT', '공시', '영업', '자영업']
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
                    <input className="input" required></input>
                </div>
            </div>

            <div className="content-pwd">
                <div className="title">
                    비밀번호
                </div>
                <div className="content-input">
                    <input type="password" className="input"></input>
                </div>
            </div>

            <div className="content-pwd-check">
                <div className="title">
                    비밀번호확인
                </div>
                <div className="content-input">
                    <input type="password" className="input"></input>
                </div>
            </div>

            <div className="content-nickname">
                <div className="title">
                    닉네임
                </div>
                <div className="content-input">
                    <input className="input"></input>
                </div>
            </div>

            <div className="content-email">
                <div className="title">
                    이메일
                </div>
                <div className="content-input">
                    <input className="input"></input>
                </div>
            </div>

            <div className="content-category">
                <div className="title">
                    준비중인 분야
                </div>
                <div className="category">
                    <select className="dropdown" value={category} onChange={(e)=>setCategory(e.target.value)}>
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