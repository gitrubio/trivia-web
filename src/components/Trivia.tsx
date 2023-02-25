import React , { useContext, useRef , useState} from 'react'
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import '../styles/Trivia.css'
import { QuestionContext } from '../context/QuestionProvider';
import Question from './Question';
import Results from './Results';
import { IAnswers } from '../interfaces/app.interfaces';

export default function Trivia() {

    const ref : React.MutableRefObject<CarouselRef | null>  = useRef(null)
    const { questions } = useContext(QuestionContext)
    const [answers,setanswers] = useState<IAnswers[]>(questions.map((question) => ({correct_answer : false, question : question.question})))
    const [lastQuestion, setLastQuestion] = useState(0)
    const sumPoints = (object : IAnswers[]) =>{
        setanswers(object)
    }

    const handleNext = () => {
      const carousel  =  ref.current
      if(carousel) carousel.next()
    }
    
      return (
        <Carousel
          style={{ display: "flex" }}
          ref={ref}
          afterChange={(e)=>setLastQuestion(e)}
          className="carousel"
          dots={false}
        >
          {questions.map((question, index) => (
            <Question question={question} answers={answers} points={sumPoints} next={handleNext} index={index} />
          ))}
          {questions.length === lastQuestion  ? <Results answers={answers}/>: <div></div>}
        </Carousel>
      );
    };
