import React from 'react'
import {
    View,
    Subtitle,
    Caption
} from "@shoutem/ui";
import {IconButton, Card} from "react-native-paper";

export default function SolutionComponent({ answers }) {

    return(
            answers.map(res =>
                <Card style={{padding: 10, marginTop: 20, backgroundColor: 'lightgray'}}>
                    <View styleName="content">
                        <Subtitle>{res.question}</Subtitle>
                        <View>
                            <Subtitle styleName="md-gutter-right" style={{color: 'green'}}>{res.rightAnswer}</Subtitle>
                            {
                                res.answer !== res.rightAnswer ?
                                    <Caption styleName="line-through">{res.answer}</Caption> :
                                    <IconButton
                                        icon="check"
                                        style={{backgroundColor: 'green'}}
                                    />
                            }
                        </View>
                    </View>
                </Card>
            )

    )
}