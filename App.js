
import React from 'react';
import RootNavigation from "./navigations/RootNavigation";
import {Provider as PaperProvider} from "react-native-paper";
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'

export default function App(){
    return (
        <PaperProvider
            settings={{
                icon: props => <AwesomeIcon {...props} />,
            }}
        >
            <RootNavigation />
        </PaperProvider>
    )
}