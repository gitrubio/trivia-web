import React from 'react'
import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Card , Typography } from 'antd';
import {  IPropsQuestion } from '../interfaces/app.interfaces';

export default function Question({ question, points, index }: IPropsQuestion) {
  return (
    <Card
    style={{justifySelf : 'center'}}
      headStyle={{ border: "none" }}
      className="card-question"
      actions={[
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      title={` QUESTION #${index + 1}`}
    >
      <Typography style={{ color: "white" }}>{question.question}</Typography>
    </Card>
  );
}
