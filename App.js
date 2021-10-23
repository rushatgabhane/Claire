import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {Camera} from 'expo-camera';
import TFCameraGazePredictor from './src/components/TFCameraGazePredictor';
import predictor from './src/libs/predictor';
import styles from './src/styles';

class App extends React.Component {
  constructor(props){
    super(props)
    
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
    this.getPermissionAsync();
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
    const {status} = await Camera.requestPermissionsAsync();
    this.state.hasPermission = status === 'granted';
  }

  getBoxStyle() {
    if(this.state.gazePrediction === 'STRAIGHT'){
      return styles.greenBox;
    }
    if(this.state.gazePrediction === 'LEFT') {
      return styles.redBox;
    }
    if(this.state.gazePrediction === 'RIGHT') {
      return styles.blueBox;
    }
    if(this.state.gazePrediction === 'TOP') {
      return styles.yellowBox;
    }
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <TFCameraGazePredictor
          handleGazePrediction={this.handleGazePrediction}
        />
        <Text style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
        }}>
          {this.state.gazePrediction}
        </Text>
        <View
          style={this.getBoxStyle()}
        >
        </View>
      </View>
    )
  }
}

export default App;
