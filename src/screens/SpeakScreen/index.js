import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles';
import IconBox from '../../components/IconBox';

class SpeakScreeen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <IconBox 
                    iconName="light.png"
                    label="light"
                />
            </View>
        );
    }
}

export default SpeakScreeen;
