import React from "react";
import {useEffect, useState} from 'react';
import axios from "axios";


function CodeContents()
{
    const [contents, setContents] = useState([]);
    if(true){ contents.writer="writer_test"; }
    contents.createDate = "";
    contents.likes = 0;
    contents.title = "";

    useEffect(() => {
        axios.get('https://localhost:8080/')
            .then(resp => {
                setContents(resp.data.contents);
                console.log(resp.data.contents)
            })
            .catch(error => {
                console.error('데이터를 불러오는 중 오류 발생 : ', error);
            });
    }, []);

    return(
        <div className="Code_Main_wapper">
            <a className="Code_list">Code Review</a>

            <div className="Code_list_wapper" style={{display: 'block'}}>
                <div className="Code_list_i">
                    <div className="Code_list_img"></div>
                    <div className="Code_list_contents" style={{display: 'flex'}}>
                        <div className="Code_small" style={{display: 'flex'}}>
                            <div className="Code_list_time">{contents.createDate}</div>
                            <div className="Code_list_likes">{contents.likes}</div>
                        </div>
                    </div>
                    <div className="QnA_list_title">{contents.title}</div>
                </div>

            </div>
        </div>
    );
}

export default CodeContents;