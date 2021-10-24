import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';

class SpeakScreeen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={styles.centerText}>
                    Speak Screen
                </Text>
            </View>
        );
    }
}

export default SpeakScreeen;
