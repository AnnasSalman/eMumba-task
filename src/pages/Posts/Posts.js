import React, {useEffect} from 'react'
import {Row, Col, Typography} from 'antd'
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './Posts.css'

import {getPosts} from "../../redux/actions";

// Private components
import PostItem from "./components/PostItem/PostItem";

const {Title} = Typography;

const Posts = props => {
    const {state} = useLocation();
    const dispatch = useDispatch();

    const posts = useSelector(state => state.postsReducer.posts);

    useEffect(()=>{
        dispatch(getPosts(state.id));
    },[])

    return(
        <Row>
            <Col
                span={22} offset={1}
            >
                <Title>{state.name}'s Posts</Title>
                <Row>
                    {
                        posts.data
                            ? posts.data.map((item)=>(
                                <PostItem
                                    {...item}
                                />))
                            : 'loading'
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default Posts;
