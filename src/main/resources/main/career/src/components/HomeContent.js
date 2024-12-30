import "../css/home.css";
import {Link} from "react-router-dom";

function HomeContent(){
    
    const categories = [
        '경영·사무·금융·보험직', 
        '연구직·공학기술직', 
        '교육·법률·사회복지·경찰·소방직·군인', 
        '보건·의료직',
        '예술·디자인·방송·스포츠직',
        '미용·여행·숙박·음식',
        '영업·판매·운전·운송직',
        '건설·채굴직',
        '설치·정비·생산직',
        '농림어업직'
    ]

    return(
        <div className="home-content-container">
            <Content categories={categories}></Content>
        </div>
        
    )
}

function Content(props){

    return(
        <div className="home-content-container">
            {
                props.categories.map((category,idx)=>{
                    return(
                        <div key={idx} className="home-content-box">
                            <li><Link to="/board" state={{data: category}}>{category}</Link></li>
                        </div>        
                    )
                })
            }
        </div>
    )
}

export default HomeContent;