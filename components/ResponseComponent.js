import React from 'react'
import {
    Card
} from "react-native-paper";
import {TouchableOpacity, Text} from "react-native";

export default function ResponseComponent(props) {
    const {setAnswer, responses} = props
    return(
        <Card>
            <Card.Content>
                {
                    responses.map(res =>
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 7,
                                elevation: 2,
                                backgroundColor: 'lightgray',
                                borderRadius: 20
                            }}
                            onPress={() => setAnswer(res)}
                        >
                            <Text>{res}</Text>
                        </TouchableOpacity>
                    )
                }
            </Card.Content>
        </Card>
    )
}