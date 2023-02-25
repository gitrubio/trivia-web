import React , { useContext, useRef , useState} from 'react'
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import '../styles/Trivia.css'
import { QuestionContext } from '../context/QuestionProvider';
import Question from './Question';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Results from './Results';

export default function Trivia() {

    const ref : React.MutableRefObject<CarouselRef | null>  = useRef(null)
    const { questions } = useContext(QuestionContext)
    const [points,setPoints] = useState(0)
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
        <Carousel
          style={{ display: "flex" }}
          ref={ref}
          afterChange={onChange}
          className="carousel"
          dots={true}
        >
          {questions.map((question, index) => (
            <Question question={question} points={sumPoints} index={index} />
          ))}
          {questions.length !== 0 ? <Results/>: <div></div>}
        </Carousel>
      );
    };
