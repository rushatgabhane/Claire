import React from 'react';
import IconBox from '../components/IconBox';
import {colors} from '../theme';
import * as Speech from 'expo-speech';
import {Audio} from 'expo-av';

const speechOptions = {
    rate: 0.7,
}

function toggleIconBoxColor(iconBox) {
    if (iconBox.props.iconName === 'water') {
        return iconBox;
    }

    if (iconBox.props.iconName === 'customMessage') {
        return iconBox;
    }

    if (iconBox.props.iconName === 'toilet') {
        return iconBox;
    }

    if (iconBox.props.iconName === 'emergency') {
        return iconBox;
    }
    const newBackgroundColor = iconBox.props.backgroundColor === colors.primary ? colors.grey : colors.primary;

    return <IconBox
        iconName={iconBox.props.iconName}
        label={iconBox.props.label}
        backgroundColor={newBackgroundColor}
        key={iconBox.key}
    />
}

function speakIOTToggle(iconBox) {
    const deviceName = iconBox.props.iconName;
    if (iconBox.props.iconName === 'customMessage') {
        return;
    }

    if (iconBox.props.iconName === 'emergency') {
        return Speech.speak('Dialing emergency contact number, and sending message for help!', speechOptions);
    }

    if (iconBox.props.iconName === 'toilet') {
        return Speech.speak('I need to go to washroom.', speechOptions);
    }

    if(iconBox.props.iconName === 'water') {
        return Speech.speak('I need some water please.', speechOptions);
    }

    const deviceIsOn = iconBox.props.backgroundColor === colors.primary;
    if (deviceIsOn) {
        return Speech.speak(`Turning off ${deviceName}.`, speechOptions);
    }
    Speech.speak(`Turning on ${deviceName}.`, speechOptions);
}

function speakWord(word) {
    return Speech.speak(word);
}

async function playDing() {
    const {sound} = await Audio.Sound.createAsync(require('../../assets/bud.mp3'));
    await sound.playAsync();
    await sound.unloadAsync();
}

export {
    toggleIconBoxColor,
    speakIOTToggle,
    speakWord,
    playDing,
};