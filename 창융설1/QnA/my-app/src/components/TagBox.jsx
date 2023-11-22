import React, {useEffect, useState} from 'react';
import TagUnit from "./TagUnit";
import axios from 'axios';
import {response} from "express";

function TagBox() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        axios.get('https://localhost/tags')
            .then(response => {
                setTags(response.data);
            });
    }, []);
    return (
        <>
            <TagUnit tags={tags} />
        </>
    );
}

export default TagBox;