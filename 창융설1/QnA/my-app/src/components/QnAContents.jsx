import React, {useEffect, useState} from 'react';
import axios from "axios";

function QnAContents() {
        const [boardList, setBoardList] = useState([])

        useEffect(() => {
            axios.get('http://localhost:8080/')
                .then((response) => {
                    setBoardList(response.data)
                })
                .catch(function(error) {
                    console.log(error)
                })
        }, [])
    boardList.map((board) => {
        return(
            <div className="QnA_Main_wapper">
                <a className="QnA_list">QnA</a>

                <div className="QnA_list_wapper" style={{display: 'block'}}>
                    <div className="QnA_list_i">
                        <div className="QnA_list_img"></div>
                        <div className="QnA_list_contents" style={{display: 'flex'}}>
                            <div className="QnA_small" style={{display: 'flex'}}>
                                <div className="QnA_list_title">{board.title}</div>
                                <div className="QnA_list_time">{board.createDate}</div>
                                <div className="QnA_list_likes">{board.likes}</div>
                            </div>
                        </div>
                        <div className="QnA_list_title">{board.content}</div>
                    </div>
                </div>
            </div>
        );
    })
}

export default QnAContents;