import React from 'react'
import {Button, Text, View} from "@shoutem/ui";

export default function CustomButton({onPress, text}) {
    return(
        <View style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: 30,
            paddingRight: 10,
            paddingBottom: 10
        }}>
            <Button
                styleName="secondary"
                onPress={onPress}
            >
                <Text>{text}</Text>
            </Button>
        </View>
    )
}