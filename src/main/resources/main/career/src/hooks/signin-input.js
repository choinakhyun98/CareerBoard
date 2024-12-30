import {useState, useEffect} from 'react';
// 입력값이 올바른 형식인지 확인하기 위한 각 정규식 모음 객체
const inputRegs = {
    // 아이디 : 문자로 시작하여, 영문자, 숫자를 사용하여 4~20자 이내
    idRegex: /^[a-zA-Z][a-zA-Z0-9]{5,19}$/,
    // 비밀번호 : 최소 8자 이상, 영문 / 숫자 조합
    pwdRegex: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
    // 닉네임 : 영어 대/소문자, 숫자, 한글 자모음 조합, 2~10자 이내
    nicknameRegex: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{3,10}$/,
    // 이메일
    emailRegex : /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
}

//input -> 회원이 입력하게 될 각 입력값들
//validation -> 입력한 값이 유효한 값인지 확인하고 유효하지 않거나 유효할 때 보여줄 메세지로 구성
//inputChange -> 입력값이 바뀜에 따라 각 입력값의 값을 저장
export function useInput(){

    const [input,setInput] = useState({
        inputId : '',
        inputPwd : '',
        inputCorrectPwd : '',
        inputNickName : '',
        inputEmail : '',
        inputCategory : '',
    })

    const [validation, setValidation] = useState({
        checkId: false,
        checkPwd: false,
        checkCorrectPwd: false,
        checkNickName: false,
        checkEmail: false,
        checkCategory: false,
        alertId: '',
        alertPwd: '',
        alertEmail: '',
        alertNickName: '',
        alertCorrectPwd: '',
        alertCategory: ''
    });

    const inputChange = ((e)=>{
        const {name, value} = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value,
        }));

    });

    //각 입력값에 대한 정규식을 통해 입력값이 유효한지 확인하고 안내 문자 설정
    useEffect(() => {

        // 아이디 유효성 검사
        if (!inputRegs.idRegex.test(input.inputId)) {
            setValidation(prev=>({...prev, alertId: '아이디는 영문자, 숫자 조합으로 6~20자 이내로 문자로 시작해주세요', checkId: false}));
        } else {
            setValidation(prev=>({...prev, alertId: '올바른 형식입니다.' , checkId: true}));
        }

    }, [input.inputId]);

    useEffect(()=>{
        // 비밀번호 유효성 검사
        if (!inputRegs.pwdRegex.test(input.inputPwd)) {
            setValidation(prev=> ({...prev, alertPwd: '비밀번호는 최소 8자 이상의 영문 / 숫자 조합이어야 합니다.', checkPwd: false}))
        } else {
            setValidation(prev=> ({...prev, alertPwd: '올바른 형식입니다.', checkPwd: true}))
        }
    },[input.inputPwd])

    useEffect(()=>{
        // 비밀번호 확인 유효성 검사
        if (input.inputCorrectPwd !== input.inputPwd) {
            setValidation(prev=>({...prev, alertCorrectPwd: '입력한 비밀번호와 같지 않습니다.', checkCorrectPwd: false}))
        } else {
            setValidation(prev=>({...prev, alertCorrectPwd: '일치합니다.', checkCorrectPwd: true}))
        }
    },[input.inputCorrectPwd,input.inputPwd])

    useEffect(()=>{
        // 이메일 유효성 검사
        if (!inputRegs.emailRegex.test(input.inputEmail)) {
            setValidation(prev=>({...prev, alertEmail: '올바른 이메일 형식이 아닙니다.', checkEmail: false}))
        } else {
            setValidation(prev=>({...prev, alertEmail: '올바른 형식입니다.', checkEmail: true}))
        }
    },[input.inputEmail])

    useEffect(()=>{
        // 닉네임 유효성 검사
        if (!inputRegs.nicknameRegex.test(input.inputNickName)) {
            setValidation(prev=>({...prev, alertNickName: '닉네임은 영어 대/소문자, 숫자, 한글 자모음 조합, 3~10자로 해주세요.', checkNickName: false}))
        } else {
            setValidation(prev=>({...prev, alertNickName: '올바른 형식입니다.', checkNickName: true}))
        }
    },[input.inputNickName])

    useEffect(()=>{
        if(!input.inputCategory){
            setValidation(prev=>({...prev, alertCategory: '분야를 선택해주세요.', checkCategory: false}))
        }else{
            setValidation(prev=>({...prev, alertCategory: '', checkCategory: true}))
        }
    },[input.inputCategory])

    return [input, inputChange, validation, setValidation]
    
}