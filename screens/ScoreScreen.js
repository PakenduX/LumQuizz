import React from 'react'
import {View } from "@shoutem/ui";
import Header from "../components/Header";
import ScoreComponent from "../components/ScoreComponent";
import CustomButton from "../components/CustomButton";

export default function ScoreScreen({ navigation }) {
    const answers = navigation.getParam('answers')
    return(
        <View>
            <Header title='Score'/>
            <ScoreComponent answers={answers}/>
            <CustomButton
                onPress={() => navigation.navigate('solution', {
                    answers: answers
                })}
                text="Voir la solution"
            />
        </View>
    )
}