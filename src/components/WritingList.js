import React, { useEffect, useState } from 'react'
import axios from 'axios';

function WritingList() {

    const [writingList, setWritingList] = useState([]);

    useEffect(() => {
        axios
            .get('https://react-yazi-yorum.herokuapp.com/posts')
            .then((response) => {
                setWritingList(response.data);
            });
    }, [])

    return (
        writingList.map((write) => {
            return (
                <div className="item" key={write.id}>
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <a className="header">{write.title}</a>
                        <div className="description">{write.created_at}</div>
                    </div>
                </div>
            )
        })
    )
}

export default WritingList
