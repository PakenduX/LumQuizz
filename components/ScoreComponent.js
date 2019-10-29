import React from 'react'
import {ImageBackground, Overlay, Tile, Title, View} from '@shoutem/ui'
import good from '../assets/img/good.png'
import bad from '../assets/img/bad.png'
import mean from '../assets/img/mean.jpg'
import CustomButton from "./CustomButton";

export default function ScoreComponent({ answers }) {
    const computeScore = () => {
        let rightAnswer = 0;
        answers.map(res => {
            if(res.answer === res.rightAnswer){
                rightAnswer++
            }
        })
        return Math.ceil((rightAnswer*100)/15)
    }

    const score = computeScore()
    let img = null
    if(score > 50){
        img = good
    } else if(score === 50){
        img = mean
    } else {
        img = bad
    }

    return(
        <View style={{padding: 10}}>
            <ImageBackground
                styleName="large-portrait"
                source={img}
            >
                <Tile>
                    <Overlay>
                        <Title styleName="md-gutter-bottom">Votre score {score + '%'}</Title>
                    </Overlay>
                </Tile>
            </ImageBackground>
        </View>
    )
}