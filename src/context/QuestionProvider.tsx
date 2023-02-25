import React, { createContext, useState } from 'react'
import { IContextQuestion, Result } from '../interfaces/app.interfaces'
import { IPropsQuestionProvider } from '../interfaces/app.interfaces'

export const QuestionContext = createContext({} as IContextQuestion)

const data: Result[] = [

]

const QuestionProvider = ({children}: IPropsQuestionProvider) => {
    const [questions, setQuestions] = useState(data)

    return (
      <div> 
      <QuestionContext.Provider value={{questions: questions, setQuestions: setQuestions,}}>
        {children}
      </QuestionContext.Provider>

      </div>
    )
}

export default QuestionProvider