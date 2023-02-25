import React from 'react'
import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar,Card } from 'antd';
import { Result, IPropsQuestion } from '../interfaces/app.interfaces';

const { Meta } = Card;

export default function Question({question, points} : IPropsQuestion ) {
  return (
    <Card 
    className="card"
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title={''}
      description="This is the description"
    />
  </Card>
  )
}
