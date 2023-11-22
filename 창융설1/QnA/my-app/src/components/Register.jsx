/*
import React, {useState, useCallback } from "react";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const [emailMsg, setEmailMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState('');
    const [confirmPwdMsg, setConfirmPwdMsg] = useState("");
    const [nicknameMsg, setNicknameMsg] = useState("");

    const [checkMail, setCheckMail] = useState(false);
    const [checkNickname, setCheckNickname] = useState(false);


    axios.post("http://localhost:8080/signup", {
         stuNum: stuNum,
         email: email,
         userName: userName,
         password: password

     }).then(function (response) {
         if(response.data.code == 0){
             setPopup({
                 open: true,
                 title: "Confirm",
                 message: "Join Success!",
                 callback: function(){
                     navigate("/login");
                 }
             });
         } else {
             let message = response.data.message;
             if(response.data.code == 10000){
                 message = "User ID is duplicated. Please enter a different User ID. "
             }
             setPopup({
                 open: true,
                 title: "Error",
                 message: message
             });
         }
     }).catch(function (error) {
         console.log(error);
     });


    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
    };

    const validatePwd = (password) => {
        return password
            .toLowerCase()
            .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
    };

    const validateNickname = (nickname) => {
        return nickname
            .toLowerCase()
            .match(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|].{1,8}$/)
    };

    const isEmailValid = validateEmail(email);
    const isPwdValid = validatePwd(password);
    const isConfirmPwd = password === confirmPwd;
    const isNicknameValid = validateNickname(nickname);

    //이메일
    const onChangeEmail = useCallback(async (e) => {
        const currEmail = e.target.value;
        setEmail(currEmail);
        if (!validateEmail(currEmail)) setEmailMsg("이메일 형식이 올바르지 않습니다.");
        else setEmailMsg("올바른 이메일 형식입니다.");
    });

    //이메일 중복검사
    const onCheckEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await Api.post("user/register/email", {email});
            const {result} = res.data;

            if (!result) {
                setEmailMsg("이미 등록된 메일입니다. 다시 입력해주세요.");
                setCheckMail(false);
            } else {
                setEmailMsg("사용 가능한 메일입니다.😊");
                setCheckMail(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    //비밀번호
    const onChangePwd = useCallback((e) => {
        const currPwd = e.target.value;
        setPassword(currPwd);

        if (!validatePwd(currPwd)) setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.");
        else setPwdMsg("안전한 비밀번호입니다.");
    }, []);

    //비밀번호 확인
    const onChangeConfirmPwd = useCallback((e) => {
        const currConfirmPwd = e.target.value;
        if (currConfirmPwd !== password) setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
        else setConfirmPwdMsg("올바른 비밀번호입니다.");
    }, [password])

    //닉네임
    const onChangeNickname = useCallback((e) => {
        const currNickname = e.target.value;
        setNickname(currNickname);

        if (!validateNickname(currNickname)) {
            setNicknameMsg("1글자 이상 9글자 미만으로 입력해주세요.");
        } else {
            setNicknameMsg("올바른 닉네임 형식입니다.");
        }
    }, []);


    //닉네임 중복검사
    const onCheckNickname = async (e) => {
        e.preventDefault();

        try {
            const res = await Api.post("user/register/nickname", {nickname});

            const {result} = res.data;

            if (!result) {
                setNicknameMsg("이미 등록된 닉네임입니다. 다시 입력해주세요.");
                setCheckNickname(false);
            } else {
                setNicknameMsg("사용 가능한 닉네임입니다.😊");
                setCheckNickname(true);
            }

        } catch (err) {
            console.log(err);
        }
        const isAllValid = isEmailValid && isPwdValid && isConfirmPwd && isNicknameValid && isAccepted && checkMail && checkNickname;

    }



    return (
        <div className="register_title>회원가입</div>

        <div className="register_input">
            <input>학번</input>
            <input>웹메일</input>
            <input>닉네임</input>
            <input type="password" placeholder="    kumoh.ac.kr" >비밀번호</input>
        </div>

        <div className="register_btn">
            <button onClick={onSubmit} type = "submit" disabled = {!isAllValid}>가입하기</button>
        </div>
    );
};


export default Register;


 */