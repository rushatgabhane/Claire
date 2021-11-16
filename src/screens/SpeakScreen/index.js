import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {Camera} from 'expo-camera';
import TFCameraGazePredictor from '../../components/TFCameraGazePredictor';
import predictor from '../../libs/predictor';
import styles from '../../styles';
import IconBoxList from '../../components/IconBoxList';
import {leftLetters, rightLetters} from '../../utils/DefaultLetterBoxArray';
import InfoBox from '../../components/InfoBox';
import PillBox from '../../components/PillBox';
import {speakWord} from '../../utils';
import {playDing} from '../../utils';

class SpeakScreen extends React.Component {
    constructor(props) {
        super(props);

        this.handleLookUp = this.handleLookUp.bind(this);
        this.handleLookLeft = this.handleLookLeft.bind(this);
        this.handleLookRight = this.handleLookRight.bind(this);
        this.handleLetter = this.handleLetter.bind(this);
        this.getPermissionAsync = this.getPermissionAsync.bind(this);
        this.handleGazePrediction = this.handleGazePrediction.bind(this);

        this.originalLeftLetters = leftLetters;
        this.originalRightLetters = rightLetters;

        this.state = {
            leftLetters: leftLetters,
            rightLetters: rightLetters,
            originalLeftLetters: leftLetters,
            originalRightLetters: rightLetters,
            hasPermission: false,
            gazePrediction: 'Loading..',
            word: '',
        }
    }

    async componentDidMount() {
        await tf.ready();
        await predictor.loadModel();
        if (this.getPermissionAsync()) {
            this.setState({
                hasPermission: true,
            });
        }
    }

    handleGazePrediction(gazePrediction) {
        if (gazePrediction === this.state.gazePrediction) {
            return;
        }
        this.setState({
            gazePrediction,
        });
    }

    getPermissionAsync = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        return status === 'granted';
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.gazePrediction != prevState.gazePrediction) {
            if (this.state.gazePrediction === 'LEFT') {
                this.handleLookLeft();
            } else if (this.state.gazePrediction === 'RIGHT') {
                this.handleLookRight();
            } else if (this.state.gazePrediction === 'TOP') {
                this.handleLookUp();
            }
        }
    }

    handleLookUp() {
        playDing();
        speakWord(this.state.word);
        this.setState({
            leftLetters: this.state.originalLeftLetters,
            rightLetters: this.state.originalRightLetters,
            word: '',
        });
    }

    handleLookLeft() {
        if (this.state.leftLetters.length === 0) {
            return;
        }

        playDing();
        if (this.state.leftLetters.length === 1 && this.state.rightLetters.length === 0) {
            this.handleLetter(this.state.leftLetters[0].props.text);
            return;
        }

        const middleIndex = Math.ceil(this.state.leftLetters.length / 2);
        const newLeftLetters = this.state.leftLetters.slice().splice(0, middleIndex);   
        const newRightLetters = this.state.leftLetters.slice().splice(middleIndex, this.state.leftLetters.length);

        this.setState({
            leftLetters: newLeftLetters,
            rightLetters: newRightLetters,
        });
    }

    handleLookRight() {
        if (this.state.rightLetters.length === 0) {
            return;
        }

        playDing();
        if (this.state.rightLetters.length === 1 && this.state.leftLetters.length === 0) {
            this.handleLetter(this.state.rightLetters[0].props.text);
            return;
        }

        const middleIndex = Math.ceil(this.state.rightLetters.length / 2);
        const newLeftLetters = this.state.rightLetters.slice().splice(0, middleIndex);   
        const newRightLetters = this.state.rightLetters.slice().splice(middleIndex, this.state.rightLetters.length);

        this.setState({
            leftLetters: newLeftLetters,
            rightLetters: newRightLetters,
        });
    }

    handleLetter(letter) {
        this.setState(prevState => {
            return {
                ...prevState,
                leftLetters: prevState.originalLeftLetters,
                rightLetters: prevState.originalRightLetters,
                word: prevState.word.concat(letter),
            }
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View>
                    {this.state.hasPermission === true
                        ? <TFCameraGazePredictor
                            handleGazePrediction={this.handleGazePrediction}
                        />
                        : <Text>
                            Please grant camera permissions.
                        </Text>
                    }
                </View>
                <TouchableOpacity
                    ref={touchable => this.infoBox = touchable}
                    onPress={this.handleLookUp}
                >
                    <InfoBox 
                        text={`       ${this.state.gazePrediction}
 Look up to speak`}
                        boldText={this.state.word}
                    />
                </TouchableOpacity>
                <View style={styles.pillBoxParent}>
                    <PillBox />
                </View>
                <ScrollView>
                    <View style={styles.allIcons}>
                        <TouchableOpacity
                            style={styles.w50}
                            onPress={this.handleLookLeft}
                        >
                            <IconBoxList
                                iconBoxList={this.state.leftLetters}
                            />
                        </TouchableOpacity>
                        <View style={styles.verticalSeperator} />
                        <TouchableOpacity
                            style={styles.w50}
                            onPress={this.handleLookRight}
                        >
                            <IconBoxList
                                iconBoxList={this.state.rightLetters}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SpeakScreen;
