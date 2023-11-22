import React, { useState, useEffect} from 'react';

function ProfileUnit( {users} ) {
    return(
        <div>
            <div>{users.img}</div>
            <div>
                <div>{users.id}</div>
                <div>{users.name}</div>
            </div>

            <div>
                <div>활동 지수</div><a>{users.score}</a>
                <div>작성 게시물</div><a>5</a>
                <div>작성 댓글</div><a>2</a>
            </div>

            <button>비밀 번호 수정</button>
            <button>회원 탈퇴</button>
        </div>
    );
}

export default ProfileUnit;