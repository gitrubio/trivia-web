import React , { useRef } from 'react'
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import '../styles/Trivia.css'

export default function Trivia() {

    const ref : React.MutableRefObject<CarouselRef | null>  = useRef(null)

    const handleNext = () => {
      const carousel  =  ref.current
      if(carousel) carousel.next()
    }

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
      };
    
      return (
        <Carousel ref={ref} afterChange={onChange} className='carousel' /* dots={false} */>
          <div>
            <h3 className='card'>1</h3>
            <button onClick={handleNext}> pa alante</button>
          </div>
          <div>
            <h3 className='card'>2</h3>
          </div>
          <div>
            <h3 className='card'>3</h3>
          </div>
          <div>
            <h3 className='card'>4</h3>
          </div>
          <div>
            <h3 className='card'>4</h3>
          </div>
          <div>
            <h3 className='card'>4</h3>
            <button onClick={handleNext}> pa alante</button>
          </div>
        </Carousel>
      );
    };
