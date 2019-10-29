import React from 'react'
import Header from "./Header";
import {View} from "@shoutem/ui";
import QuestionComponent from "./QuestionComponent";
import ResponseComponent from "./ResponseComponent";

export default function QuestionView(props){
    const { setAnswer, questionText, responses, headerTitle} = props
    return(
        <View>
            <Header title={headerTitle}/>
            <View>
                <QuestionComponent text={questionText}/>
                <ResponseComponent
                    responses={responses}
                    setAnswer={setAnswer}
                />
            </View>
        </View>
    )
}