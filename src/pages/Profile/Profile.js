import React from 'react';
import {Col, Row, Typography, Image} from 'antd';
import {UserOutlined, EnvironmentOutlined} from '@ant-design/icons'
import {useLocation} from 'react-router-dom';
import './Profile.css';

const {Title} = Typography;
const Profile = props => {

    const {state} = useLocation();
    const {profile} = state;
    const {
        firstName,
        lastName,
        email,
        dateOfBirth,
        location,
        phone,
        registerDate,
    } = profile;

    return(
        <Row>
            <Col
                span={22} offset={1}
            >
                <Title>User Profile</Title>
                <Row>
                    <Col xs={24} sm={24} md={8}>
                        <div className={'picture-bar'}>
                            <Image
                                width={200}
                                src={state.profile.picture}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={200}
                                    />
                                }
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <div className={'data-bar'} style={{fontSize: 22}}>
                            <UserOutlined/>
                            <Title level={3}>Personal Information</Title>
                            <Title level={5}>
                                Name: {`${firstName} ${lastName}`}
                            </Title>
                            <Title level={5}>
                                Email: {email}
                            </Title>
                            <Title level={5}>
                                Date Of Birth: {new Date(dateOfBirth).toDateString()}
                            </Title>
                            <Title level={5}>
                                Phone: {phone}
                            </Title>
                            <Title level={5}>
                                Registration Date: {new Date(registerDate).toDateString()}
                            </Title>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <div className={'data-bar'}>
                            <EnvironmentOutlined style={{fontSize: 22}}/>
                            <Title level={3}>Location Information</Title>
                            <Title level={5}>
                                City: {location.city}
                            </Title>
                            <Title level={5}>
                                Country: {location.country}
                            </Title>
                            <Title level={5}>
                                State: {location.state}
                            </Title>
                            <Title level={5}>
                                Street: {location.street}
                            </Title>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default Profile;
