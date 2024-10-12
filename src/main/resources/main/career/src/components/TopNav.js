import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../css/nav.css';

function TopNav(){
    
    const [category, setCategory] = useState('');
    const categories = ['IT', '공시', '영업', '자영업']
    
    return(
        
        <div className="Nav">
            <div className="main-title">
                <Link to="/" style={{ textDecoration: "none", color:"black", padding:"15px"}}>Career With</Link>
            </div>
            <div className="nav-menu">
                <div className="search-bar">
                    <form>
                        <input type='text' maxLength='20' className="search-input" placeholder='검색어를 입력해주세요'></input>
                        <input type='submit' className="search-btn" value='검색'></input>
                    </form>
                </div>
                <div className="category">
                    <select className="dropdown" value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="" >직종을 선택하세요</option>
                        {categories.map((category, index) => (
                        <option className="content-category" key={index} value={category}>
                            {category}
                        </option>
                        ))}
                    </select>    
                </div>
            </div>

            <div className="button-area">
                <Link to="/login"><button className="login-button">로그인</button></Link>
                <Link to="/sign-in"><button  className="sign-button">회원가입</button></Link>
            </div>
            
        </div>
                           
    )

}

export default TopNav;