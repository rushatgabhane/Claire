import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SpeakScreen from './src/screens/SpeakScreen';
import {theme} from './src/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from './src/theme';

const Tab = createBottomTabNavigator();

class App extends React.Component {
    render() {
        return (
            <NavigationContainer theme={theme}>
                <StatusBar hidden />
                <Tab.Navigator   
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
                          if (route.name === 'Home') {
                            iconName = focused ? 'home-sharp' : 'home-outline';
                          } else if (route.name === 'Speak') {
                            iconName = focused ? 'chatbox-ellipses-sharp' : 'chatbox-ellipses-outline';
                          }
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: colors.black,
                        // headerShown: false,
                    })}
                >
                    <Tab.Screen name="Speak" component={SpeakScreen} />
                    <Tab.Screen name="Home" component={HomeScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
