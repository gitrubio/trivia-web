import React from 'react'
import { CloseOutlined,CheckOutlined , CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { Card , Typography } from 'antd';
import {  IPropsQuestion } from '../interfaces/app.interfaces';

export default function Question({ question, points, index }: IPropsQuestion) {
  return (
    <Card
    style={{justifySelf : 'center'}}
      headStyle={{ border: "none" }}
      className="card-question"
      actions={[
        <CloseCircleFilled key="false" />,
        <CheckCircleFilled key="true"/>
      ]}
      title={` QUESTION #${index + 1}`}
    >
      <Typography style={{ color: "white" }}>{question.question}</Typography>
    </Card>
  );
}
