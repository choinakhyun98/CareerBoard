import axios from 'axios';

export async function postSignUp(e,data){
    e.preventDefault();

    await axios.post("http://localhost:3001/user",{
        userId: data.userId,
        userPwd: data.userPwd,
        userCorrectPwd: data.userPwd,
        userEmail: data.userEmail,
        userNickName: data.userNickName,
        userCategory: data.userCategory,
    }).then((res)=>{
        alert("회원가입에 성공하셨습니다!");
    }).catch(function(err){
        alert("error: " + err);
    });
}

