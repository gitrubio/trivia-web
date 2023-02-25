import React , { useContext, useRef } from 'react'
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import '../styles/Trivia.css'
import { QuestionContext } from '../context/QuestionProvider';
import Question from './Question';

export default function Trivia() {

    const ref : React.MutableRefObject<CarouselRef | null>  = useRef(null)
    const { questions } = useContext(QuestionContext)
    
    const sumPoints = () =>{

    }
    const handleNext = () => {
      const carousel  =  ref.current
      if(carousel) carousel.next()
    }

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    
      return (
        <Carousel style={{display : 'flex'}} ref={ref} afterChange={onChange} className='carousel' dots={true} >
          {questions.map((question,index) => <Question question={question} points={sumPoints} index={index}/>)}
        </Carousel>
      );
    };
