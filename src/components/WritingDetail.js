import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function WritingDetail() {

    let { id } = useParams() // bunu kullanarak app.js den path le gonderilen id yi yakaliyorum

    const [writingDetail, setWritingDetail] = useState({});

    useEffect(() => {
        axios
            .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
            .then((response) => {
                setWritingDetail(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []) // buna bak

    return (
        <React.Fragment>
            <h2 className="ui header">{writingDetail.title}</h2>
            <p>{writingDetail.created_at}</p>
            <p>{writingDetail.content}</p>
        </React.Fragment>
    )
}

export default WritingDetail
