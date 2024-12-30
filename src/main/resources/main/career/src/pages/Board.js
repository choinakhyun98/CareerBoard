import TopNav from '../components/TopNav';
import {useLocation, useNavigate} from 'react-router-dom';
import "../css/board.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Board(){

    const location = useLocation();
    const category = location.state.data;
    const navigate = useNavigate();

    const onClickPostPage = (()=>{
        navigate("/posting")
    })

    return(
        <>
        <TopNav></TopNav>
        <div className="board-container">
            <div className="board-category">
                <h4>{category}</h4>
                <div className="board-post-btn">
                    <button onClick={onClickPostPage}><FontAwesomeIcon icon={faPenToSquare} />작성하기</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                            <th>좋아요수</th>
                        </tr>
                    </thead>
                </table>
            </div>    
        </div>
        </>
    )
}

export default Board;