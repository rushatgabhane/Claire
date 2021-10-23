import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native'
import * as tf from '@tensorflow/tfjs'
import {fetch, cameraWithTensors} from '@tensorflow/tfjs-react-native'
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import {Camera} from 'expo-camera';
import gaze from './src/gaze';

const TensorCamera = cameraWithTensors(Camera);


class App extends React.Component {
  constructor(props){
    super(props)
    
    this.getPermissionAsync = this.getPermissionAsync.bind(this);
    
    this.state = {
      isTfReady: false,
      hasPermission: false,
      type: Camera.Constants.Type.front,
      gazeDirection: 'un',
    };
  }

  async componentDidMount() {
    await tf.ready();
    this.setState({
      isTfReady: true
    });

    await gaze.loadModel();
  
    this.getPermissionAsync();
    //Output in Expo console
    // console.log('TF ready: ', this.state.isTfReady)
  }

  getPermissionAsync = async () => {
    const {status} = await Camera.requestPermissionsAsync();
    this.state.hasPermission = status === 'granted';
    // console.log('Camera permission: ',this.state.hasPermission);
  }

  handleCameraStream = (images) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      if(nextImageTensor){
        const prediction = await gaze.getGazePrediction(nextImageTensor);
        this.setState({
          gazeDirection: prediction,
        })

        tf.dispose([nextImageTensor]);     
      }
      requestAnimationFrame(loop);
    }
    loop();
  }

  // getPrediction = async(tensor) => {
  //   if(!tensor) return;
  // }
  getBoxStyle() {
    if(this.state.gazeDirection === 'STRAIGHT'){
      return styles.greenBox;
    }
    if(this.state.gazeDirection === 'LEFT') {
      return styles.redBox;
    }
    if(this.state.gazeDirection === 'RIGHT') {
      return styles.blueBox;
    }
    if(this.state.gazeDirection === 'TOP') {
      return styles.yellowBox;
    }
  }

  render() {
    const textureDims = {
      height: 1200,
      width: 1600,
    };
    return (
      <View>
        <StatusBar hidden />
        <TensorCamera
          style={styles.camera}
          type={this.state.type}
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
          resizeHeight={200}
          resizeWidth={152}
          resizeDepth={3}
          onReady={this.handleCameraStream}
          autorender={true}
        />
        <Text style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
        }}>
          {
            this.state.gazeDirection
          }
        </Text>
        <View style={this.getBoxStyle()}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 400,
    width: 300,
    // top: -100,
    // position: 'absolute'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  redBox: {
    width: 500, 
    height: 500,
    backgroundColor:'red',
  },
  blueBox: {
    width: 500, 
    height: 500,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 500, 
    height: 500,
    backgroundColor: 'green',
  },
  yellowBox: {
    width: 500, 
    height: 500,
    backgroundColor: 'yellow',
  },
});

export default App