import React, {useEffect, useState} from 'react';
import { Tabs, Row, Col, Pagination, Typography, Spin } from 'antd';
import {useHistory} from 'react-router-dom'
import './Users.css';

// Private components
import TabItem from "./components/TabItem/TabItem";

import {useDispatch, useSelector} from "react-redux";

// actions
import {getUsers, getFullUser} from '../../redux/actions';

const { TabPane } = Tabs;
const { Title } = Typography;

const Users = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector(state => state.usersReducer.users);
    const loading = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.error);
    const males = useSelector(state => state.usersReducer.males);
    const females = useSelector(state => state.usersReducer.females);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        dispatch(getUsers(currentPage));
    },[]);

    useEffect(()=>{
        if(users && users.data){
            users.data.forEach((user)=>{
                dispatch(getFullUser(user.id));
            });
        }
    },[users]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        dispatch(getUsers(page))
    }

    const onViewProfile = (record) => {
        history.push({
            pathname: '/Profile',
            state:{
                profile: record,
            }
        });
    }

    const onViewPosts = (id, name) => {
        history.push({
            pathname: '/Posts',
            state:{
                id,
                name,
            }
        });
    }

    return(
        <Row>
            <Col span={22} offset={1}>
                <Title>Employees Listing</Title>
                {
                    !error.message ?(
                        males.length + females.length >= 10
                            ? <Title level={5}>{'showing results ' + ((currentPage * 10) - 10) + ' to ' + (currentPage * 10)}</Title>
                            : <Title level={5}><Spin/>{'   '}Loading employees {males.length + females.length}/10 on this page</Title>
                        ): null
                }
            </Col>
            {
                loading ? 'loading': error.message ? 'error loading data' :
                <>
                <Col span={22} offset={1} className={'tabView'}>
                    <Tabs defaultActiveKey="1">
                        <TabPane size={'large'} tab={`Males (${males.length})`} key="1">
                            <TabItem
                                data={males}
                                onViewProfile={record => onViewProfile(record)}
                                onViewPosts={(id, firstName) => onViewPosts(id, firstName)}
                            />
                        </TabPane>
                        <TabPane tab={`Females (${females.length})`} key="2">
                            <TabItem
                                data={females}
                                onViewProfile={(record) => onViewProfile(record)}
                                onViewPosts={(id, firstName) => onViewPosts(id, firstName)}
                            />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={22} offset={1}>
                    <div className={'paginationBar'}>
                    <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    total={users.total ? users.total : 0}
                    size={10}
                    showSizeChanger={false}
                    onChange={(page) => onPageChange(page)}
                    />
                    </div>
                </Col>
                </>
            }
        </Row>
    )
}

export default Users
