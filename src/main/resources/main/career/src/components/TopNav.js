import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../css/nav.css';
import {useNavigate} from 'react-router';

function TopNav(props){
    
    const [category, setCategory] = useState('');
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
    ]

    const isLogin = sessionStorage.getItem('id');
    const navigate = useNavigate();

    const onLogOutClick = (()=>{
        sessionStorage.removeItem('id')
        navigate('/');
    })

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
                    <i className="fas fa-search"></i>
                </div>
                <div className="nav-category">
                    <select className="dropdown" value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="" >동일한 직종의 사람들을 만나보세요</option>
                        {categories.map((category, index) => (
                        <option className="content-category" key={index} value={category}>
                            {category}
                        </option>
                        ))}
                    </select>    
                </div>
            </div>

            {
                isLogin === null ?
                <div className="button-area">
                    <Link to="/login"><button className="login-button">로그인</button></Link>
                    <Link to="/sign-in"><button  className="sign-button">회원가입</button></Link>
                </div>
                :
                <div className="mini-profile">
                    <div className="mini-user-info">
                        <img></img>
                        <p>{props.state}</p>
                    </div>
                    <button onClick={onLogOutClick}>로그아웃</button>                    
                </div>
            }
            
        </div>
                           
    )

}

export default TopNav;