import React, {useState} from 'react';
import {Row, Col, Table, Space, Button} from 'antd';

const TabItem = props => {

    const [sortedInfo, setSortedInfo] = useState({});
    const [registerSortedInfo, setRegisteredSortedInfo] = useState({});

    const columns = [
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'firstName',
            sortOrder: registerSortedInfo.columnKey === 'name' && registerSortedInfo.order,
            sorter: (a, b) => new Date(b.registerDate) - new Date(a.registerDate),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'DOB',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            render: (text, record) => (
                <Space size="middle">
                    { new Date(record.dateOfBirth).toString().substring(0, 15)}
                </Space>
            ),
            sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            sorter: (a, b) => new Date(b.dateOfBirth) - new Date(a.dateOfBirth),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Full Profile',
            dataIndex: 'fullProfile',
            key: 'fullProfile',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={()=>props.onViewProfile(record)}>View Profile</a>
                </Space>
            ),
        },
        {
            title: 'User Posts',
            dataIndex: 'userPosts',
            key: 'userPosts',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={()=>props.onViewPosts(record.id, record.firstName)}>View Posts</a>
                </Space>
            ),
        },
    ];

    const onSortPress = () => {
        setSortedInfo({
                order: 'descend',
                columnKey: 'age',
            }
        )
    }

    const onRegisterSortPress = () => {
        setRegisteredSortedInfo({
                order: 'descend',
                columnKey: 'name',
            }
        )
    }

    const onClearFilters = () => {
        setSortedInfo({})
    }

    return(
        <Row>
            <Col span={22} offset={1}>
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={onSortPress}>Sort by age</Button>
                    <Button onClick={onRegisterSortPress}>Sort by registration</Button>
                    <Button onClick={onClearFilters}>Clear filters</Button>
                </Space>
            </Col>
            <Col span={22} offset={1}>
                <Table
                    dataSource={props.data}
                    columns={columns}
                    pagination={false}
                />
            </Col>
        </Row>
    )
};

export default TabItem;
