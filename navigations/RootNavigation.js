import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Welcome from "../screens/Welcome";
import QuestionScreen from "../screens/QuestionsScreen";
import ScoreScreen from "../screens/ScoreScreen";
import SolutionScreen from "../screens/SolutionScreen";

const RootNav = createSwitchNavigator(
    {
        welcome: { screen: Welcome },
        QS: { screen : QuestionScreen},
        SS: { screen: ScoreScreen },
        solution: {screen: SolutionScreen}
    },
    {
        initialRouteName: 'welcome',
        headerMode: 'none'
    });

const RootNavigation = createAppContainer(RootNav);

export default RootNavigation;
