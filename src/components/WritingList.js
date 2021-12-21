import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function WritingList() {

    const [writingList, setWritingList] = useState([]);

    useEffect(() => {
        axios
            .get('https://react-yazi-yorum.herokuapp.com/posts')
            .then((response) => {
                setWritingList(response.data);
            });
    }, [])

    // console.log(writingList)

    return (
        <div className="ui relaxed divided list">
            {
                writingList.map((write) => {
                    return (
                        <div className="item" key={write.id}>
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <Link to={`/posts/${write.id}`} className="header">{write.title}</Link>
                                <div className="description">{write.created_at}</div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default WritingList
