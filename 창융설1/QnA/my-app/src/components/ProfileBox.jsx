import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {response} from "express";
import ProfileUnit from "./ProfileUnit";


function ProfileBox() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:8080/profile')
            .then(response => {
                setUsers(response.data)
            });
    }, []);
    return (
        <>
            <ProfileUnit users={users} />
        </>
    );
}

export default ProfileBox;