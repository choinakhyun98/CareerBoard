import '../css/login_signIn.css';
import {Link} from 'react-router-dom';

function SearchPwd(){
    
    return(
        <>
        <div className="page">
            <div className="home-link">
                <Link to="/" style={{ textDecoration: "none", color:"black"}}><p>Career With</p></Link>
            </div>
        <div className="content-id">
            <div className="title">
                이름
            </div>
            <div className="content-input">
                <input className="input"></input>
            </div>
        </div>
        <div className="content-id">
            <div className="title">
                아이디
            </div>
            <div className="content-input">
                <input className="input"></input>
            </div>
        </div>
        <div className="content-id">
            <div className="title">
                이메일
            </div>
            <div className="content-input">
                <input className="input"></input>
            </div>
        </div>
        
        <div className="check">
            <Link to="/login"><button className="check-button">취소</button></Link>
            <Link to="/login"><button className="check-button">완료</button></Link>
        </div>
        
        </div>    
        </>
    )

}

export default SearchPwd;