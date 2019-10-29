import React from 'react'
import questions from '../assets/questions'
import QuestionView from "../components/QuestionView";
const MAX_QUESTION_NUMBER = 17 - 1
const MAX_ASK_QUESTION = 15

export default function QuestionScreen(props) {

    const pickRandomQuestion = () => {
        const r = parseInt(Math.random()*MAX_QUESTION_NUMBER + 1)
        return questions[0]["q"+r]
    }

    const [question, setQuestion] = React.useState(pickRandomQuestion)
    const [questionIndex, setQuestionIndex] = React.useState(1)
    const [answers, setAnswers] = React.useState([])
    const [end, setEnd] = React.useState(false)

    if(end){
        props.navigation.navigate('SS', {
            answers: answers
        })
    }

    const handleAnswer = (res) => {
        setAnswers([...answers, {
            question: question.question,
            rightAnswer: question.rightAnswer,
            answer: res
        }])

        if(questionIndex === MAX_ASK_QUESTION){
            setEnd(true)
        } else {
            setQuestion(pickRandomQuestion)
            setQuestionIndex(questionIndex+1)
            console.log(questionIndex)
        }
    }

    return(
        <>
            <QuestionView
                responses={question.responses}
                headerTitle={`Question ${questionIndex}`}
                questionText={question.question}
                setAnswer={handleAnswer}

            />
        </>
    )
}