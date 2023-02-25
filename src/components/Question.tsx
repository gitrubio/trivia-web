import React from 'react'
import { CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { Button, Card , Typography } from 'antd';
import {  IPropsQuestion } from '../interfaces/app.interfaces';
import '../styles/question.css';
import useEncode from '../hooks/useEncode';

export default function Question({ question, points, index, next, answers}: IPropsQuestion) {

    const encode = useEncode()
    
    const saveAnswer = (answer: string) => {
      const newAnwers = answers.filter(
        (asw) => asw.question !== question.question
      );
      points([
        ...newAnwers,
        {
          question: question.question,
          correct_answer: question.correct_answer === answer,
        },
      ]);
      next();
    };

  return (
    <Card
    style={{justifySelf : 'center'}}
      headStyle={{ border: "none" }}
      className="card-question font-nunito"
      actions={[
        <Button className='question-buttom' key="false" onClick={()=> saveAnswer('False')}><CloseCircleFilled/></Button>,
        <Button className='question-buttom' key="false" onClick={()=> saveAnswer('True')}><CheckCircleFilled/></Button>,
      ]}
      title={question.category}
      
    >
      <Typography className='font-nunito' style={{  marginBottom : 10}}><strong>{`QUESTION #${index + 1}`}</strong></Typography>
      <Typography className='font-nunito' ><strong>{encode(question.question)}</strong></Typography>
    </Card>
  );
}
