import React from "react";
import {Link, useNavigate } from "react-router-dom";
import "../styles/MainCSS.css";
import { BsFillBellFill } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import kitLogo from "../kit_LOGO.png";




function Header(){
    const navigate = useNavigate();
    const goTosign = () => {
        navigate('/signin',{replace:true})
    }
    const goToRegister = () => {
        navigate('/signup', {replace:true})
    }


    return (
        <div className="Header">
            <div className="header_wapper">
                <div className="logo_wapper">
                    <Link to={'/'}><img className="kitLogo" src= {kitLogo} alt="kit_logo_img"></img></Link>
                </div>
 
                
                <div className="QnA_wapper">
                    <a className="goToQnA" href={'/question'}>
                        <Link to={'/question'}><span className="QnA">Q&A</span></Link>
                    </a>
                </div>

                <TbMinusVertical />              
    
                <div className="Code_wapper">
                    <a className="goToCode" href={'/codequestion'}>
                        <Link to={'/question'}><span className="Code">Code Review</span></Link>
                    </a>
                </div>

                <TbMinusVertical />

                <div className="tag_wapper">
                    <a className="goToTag" href={'/tags'}>
                        <Link to={'/tag'}><span className="tag">Tag</span></Link>
                    </a>    
                </div>
                
                
                <div className="alarm_wapper">
                    <div className="alarm">
                        <BsFillBellFill />
                    </div>
                </div>

                <div className="serch_wapper">
                    <div className="login_wapper">
                        <input className="search_input" placeholder="내용을 입력해주세요 :)"></input>
                        <button className="search_button">검색</button>
                    </div>
                </div>
                    
                <div className="user_wapper">
                    <button className="login" onClick={goTosign}>로그인</button>
                    <button className="register" onClick={goToRegister}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default Header;