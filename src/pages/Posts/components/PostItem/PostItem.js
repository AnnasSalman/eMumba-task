import React, {useState} from 'react';
import {Col, Image, Typography, Tag, Modal, Button} from 'antd';
import {LikeOutlined} from '@ant-design/icons'
import './PostItem.css'

const gridSizes = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
}

const {Title, Text} = Typography;

const PostItem = props => {

    // const [modalOpened, setModalOpened] = useState(false)

    // const onCancel = () => {
    //     setModalOpened(false)
    // }

    return(
        <Col {...gridSizes} className={'grid-item'}>
            <div className={'post-item'}>
                <Image
                    height={170}
                    style={{objectFit: 'cover'}}
                    width={'100%'}
                    src={props.image}
                    placeholder={
                        <Image
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        />
                    }
                />
                <div className={'post-body'}>
                    <Title level={5}>{props.text}</Title>
                    <Text type="secondary">{new Date(props.publishDate).toDateString()}</Text>
                    <div className={'post-bottom-bar'}>
                        <Text className={'likes-text'}>{props.likes}</Text>
                        <LikeOutlined style={{fontSize: 26}}/>
                    </div>
                    {/*<div className={'post-bottom-tags'}>*/}
                    {/*    {props.tags.map((item)=><Tag color="blue">{item}</Tag>)}*/}
                    {/*</div>*/}
                    {/*<Button onClick={()=>setModalOpened(true)}>Show Details</Button>*/}
                </div>
            </div>
            {/*<Modal*/}
            {/*    title={props.text}*/}
            {/*    visible={modalOpened}*/}
            {/*    // onOk={handleOk}*/}
            {/*    onCancel={onCancel}*/}
            {/*>*/}
            {/*    <p>Some contents...</p>*/}
            {/*    <p>Some contents...</p>*/}
            {/*    <p>Some contents...</p>*/}
            {/*</Modal>*/}
        </Col>
    )
}

export default PostItem;
