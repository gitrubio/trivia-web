import { ReactNode } from 'react';
export interface IResponse <T> {
    error: boolean
    data : T | null
}

export interface Questions {
    response_code: number;
    results:       Result[];
}

export interface Result {
    category:          string;
    type:              Type;
    difficulty:        Difficulty;
    question:          string;
    correct_answer:    CorrectAnswer;
    incorrect_answers: CorrectAnswer[];
}

export enum CorrectAnswer {
    False = "False",
    True = "True",
}

export enum Difficulty {
    Hard = "hard",
}

export enum Type {
    Boolean = "boolean",
}


export interface IPropsQuestionProvider{
    children: ReactNode
}

export interface IContextQuestion {
    questions : Result[]
    setQuestions : React.Dispatch<React.SetStateAction<Result[]>>
}

export interface IPropsQuestion {
    question : Result
    points : () => void
    index : number
}