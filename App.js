import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SpeakScreen from './src/screens/SpeakScreen';
import {theme} from './src/theme';

const Tab = createBottomTabNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer theme={theme}>
                <Tab.Navigator>
                    <Tab.Screen name="Speak" component={SpeakScreen} />
                    <Tab.Screen name="Home" component={HomeScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
