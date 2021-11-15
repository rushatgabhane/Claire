import React from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {Camera} from 'expo-camera';
import TFCameraGazePredictor from '../../components/TFCameraGazePredictor';
import predictor from '../../libs/predictor';
import styles from '../../styles';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.getPermissionAsync = this.getPermissionAsync.bind(this);
        this.handleGazePrediction = this.handleGazePrediction.bind(this);

        this.state = {
            hasPermission: false,
            gazePrediction: 'Loading.',
        };
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

    render() {
        // todo: use two IconBoxLists. left, right both flex 0.5 horizontally.
        return (
            <View>
                <StatusBar hidden />
                {this.state.hasPermission === true
                    ? <TFCameraGazePredictor
                        handleGazePrediction={this.handleGazePrediction}
                    />
                    : <Text>
                        Please grant camera permissions.
                    </Text>
                }
                <Text
                    style={styles.centerText}
                >
                    {this.state.gazePrediction}
                </Text>
            </View>
        );
    }
}

export default HomeScreen;
