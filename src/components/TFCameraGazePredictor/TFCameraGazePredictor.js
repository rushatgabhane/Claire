import React from 'react';
import {View} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import {cameraWithTensors} from '@tensorflow/tfjs-react-native';
import { useIsFocused } from '@react-navigation/native';
import {Camera} from 'expo-camera';
import predictor from '../../libs/predictor';
import PropTypes from 'prop-types';
import styles from '../../styles/index';

const TensorCamera = cameraWithTensors(Camera);

const propTypes = {
  /** Callback for parent to get gaze prediction */
  handleGazePrediction: PropTypes.func,
};

const defaultProps = {
  handleGazePrediction: () => {},
};

const textureDims = {
  height: 1200,
  width: 1600,
};

const TFCameraGazePredictor = (props) => {
  const handleCameraStream = (images) => {
    const loop = async () => {
      const nextImageTensor = images.next().value;
      
      if (!nextImageTensor) {
        return;
      }
      const gazePrediction = await predictor.getGazePrediction(nextImageTensor);
      props.handleGazePrediction(gazePrediction);
      tf.dispose([nextImageTensor]);
      requestAnimationFrame(loop);
    }
    loop();
  }

  const isFocused = useIsFocused();

  return (
    <View>
      { isFocused && 
      <TensorCamera
          style={styles.camera}
          type={Camera.Constants.Type.front}
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
          resizeHeight={200}
          resizeWidth={152}
          resizeDepth={3}
          onReady={handleCameraStream}
          autorender={true}
        />
      }
    </View>
  );
}

TFCameraGazePredictor.propTypes = propTypes;
TFCameraGazePredictor.defaultProps = defaultProps;
TFCameraGazePredictor.displayName = 'CameraGazePredictor';

export default TFCameraGazePredictor;
