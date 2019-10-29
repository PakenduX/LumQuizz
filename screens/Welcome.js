import React from 'react'
import {
    Caption,
    ImageBackground,
    Overlay,
    Screen,
    ScrollView,
    Tile,
    Title,
    Text,
    Button
} from "@shoutem/ui";
import Header from "../components/Header";
import stade from '../assets/img/stade.jpg'
import SplashScreen from "react-native-splash-screen";

export default function Welcome(props){

    React.useEffect(() =>
        SplashScreen.hide(),
        []
    )
    return(
        <Screen>
            <Header title="Welcome"/>
            <ScrollView>
                <ImageBackground
                    styleName="large-portrait"
                    source={stade}
                >
                    <Tile>
                        <Overlay>
                            <Title styleName="md-gutter-bottom">Connais-tu assez luminy ?</Title>
                            <Caption>Fais une partie pour le savoir</Caption>
                        </Overlay>
                        <Button
                            styleName="border"
                            onPress={() => props.navigation.navigate('QS')}
                        >
                            <Text>COMMENCER</Text>
                        </Button>
                    </Tile>
                </ImageBackground>
            </ScrollView>
        </Screen>
    )
}