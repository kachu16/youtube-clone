import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleSidebarFalse } from '../utils/hamburgerToggleSlice';
import { useParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';


const SingleVideoPage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(toggleSidebarFalse())
    },[]);

    const {id} = useParams();

    return (
        <div className='text-white m-5'>
            <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <CommentContainer/>
        </div>
    )
}

export default SingleVideoPage
