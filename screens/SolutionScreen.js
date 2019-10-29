import React from 'react'
import {ScrollView} from "@shoutem/ui";
import Header from "../components/Header";
import SolutionComponent from "../components/SolutionComponent";
import CustomButton from "../components/CustomButton";

export default function SolutionScreen({ navigation }) {
    const answers = navigation.getParam('answers')
    return(
        <ScrollView
        >
            <Header title='Solution'/>
            <SolutionComponent answers={answers}/>
            <CustomButton
                onPress={() => navigation.navigate('welcome')}
                text="Reprendre"
            />
        </ScrollView>
    )
}