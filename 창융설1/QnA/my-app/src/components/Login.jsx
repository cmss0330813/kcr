import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux"
import { CgPassword } from "react-icons/cg";
import styles from '../styles/login.module.css';
import MainCSS from "../Main/MainCSS.css";
import axios from "axios";

function Login() {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const [ loading, setLoading ] = useState(false);
    const [ msg, setMsg ] = useState("");

    useEffect(() => {
        if (msg) {
            setTimeout(() => {
                setMsg("");
                setLoading(false);
            }, 1500);
        }
    }, [msg]);

  const Logging = (e) => {
      e.preventDefault();
      if(!id) {return alert("ID를 입력하세요")}
      else if (!pwd) { return alert("비밀번호를 입력하세요")}
      else {
          let body ={
              id,
              pwd
          };

          axios.post("https://localhost:8080/api/login", body)
              .then((res) => {
                  console.log(res.data);
                  if(res.data.code === 200) {
                      console.log("로그인");
                      dispatchEvent(loginUser(res.data.userInfo));
                      setMsg("");
                  }
                  if(res.data.code === 400) {
                      setMsg("ID, Password가 비어있습니다.");
                  }
                  if(res.data.code === 401) {
                      setMsg("존재하지 않는 ID입니다.");
                  }
                  if(res.data.code === 402) {
                      setMsg("Password가 틀립니다.");
                  }
              });
      }
      setLoading(true);

      let user = useSelector((state) => {return state.user});
      const dispatch = useDispatch();

      if(res.data.code === 200) {
          console.log("로그인");
          dispatch(loginUser(res.data.userInfo));
          setMsg("");
      }
  }


    return (
        <div className="Login_wapper">
            <div className={styles.Login_title} style={{display: 'flex', alignItems: 'center'}}>로그인</div>
            <div className={styles.login_contents}>
                <form onSubmit={Logging} className={styles.id_wapper} style={{display: 'flex'}}>
                    <div className="input_id">아이디</div>
                    <input type="id_email" placeholder="      .kumoh.ac.kr" id="id_email" value={id} onChange={(e) => setId(e.target.value)} />
                </form>
                <div className={styles.pwd_wapper} style={{display: 'flex'}}>
                    <div className="input_pwd"> 비밀번호</div>
                    <input type="pwd" id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                </div>

                <div className={styles.login_button_wapper}>
                    <div className="button-wapper_login"><button type="submit" disabled={loading}>로그인</button></div>
                    <div className="button-wapper_pwd"><button onClick={}>비밀번호 찾기</button></div>
                    <div className="button-wapper_register"><button onClick={}>회원가입</button></div>
                </div>
                {msg}
            </div>
        </div>
    );
}

export default Login;