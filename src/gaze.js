import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
import * as tf from '@tensorflow/tfjs'
// import * as tfcore from "@tensorflow/tfjs-core";
// import "@tensorflow/tfjs-backend-webgl";

let model;

let amountStraightEvents = 0;
let positionXLeftIris;
let positionYLeftIris;
let event;

const video = {
    width: 1200,
    height: 1600,
}

const normalize = (val, max, min) => Math.max(0, Math.min(1, (val - min) / (max - min)));

const isFaceRotated = (landmarks) => {
    const leftCheek = landmarks.leftCheek;
    const rightCheek = landmarks.rightCheek;
    const midwayBetweenEyes = landmarks.midwayBetweenEyes;

    const xPositionLeftCheek = video.width - leftCheek[0][0];
    const xPositionRightCheek = video.width - rightCheek[0][0];
    const xPositionMidwayBetweenEyes = video.width - midwayBetweenEyes[0][0];

    const widthLeftSideFace = xPositionMidwayBetweenEyes - xPositionLeftCheek;
    const widthRightSideFace = xPositionRightCheek - xPositionMidwayBetweenEyes;

    const difference = widthRightSideFace - widthLeftSideFace;

    if (widthLeftSideFace < widthRightSideFace && Math.abs(difference) > 5) {
        return true;
    } else if (
        widthLeftSideFace > widthRightSideFace &&
        Math.abs(difference) > 5
    ) {
        return true;
    }
    return false;
};

async function renderPrediction(tensor) {
    const predictions = await model.estimateFaces({
        input: tensor
    });
    if (predictions.length > 0) {
        predictions.forEach((prediction) => {
            if(prediction.faceInViewConfidence != 1){
                console.log('not predicting: ', prediction.faceInViewConfidence);
                return; // equivalent of continue
            }
            // const keys = Object.keys(prediction);
            // console.log('keys:', keys);
            // console.log('face in view ', prediction.faceInViewConfidence);
            // console.log('annotation keys ', Object.keys(prediction.annotations))

            positionXLeftIris = prediction.annotations.leftEyeIris[0][0];
            positionYLeftIris = prediction.annotations.leftEyeIris[0][1];

            // NOT FLIPPED FOR mobile
            const faceBottomLeftX =
                video.width - prediction.boundingBox.bottomRight[0]; // face is flipped horizontally so bottom right is actually bottom left.
            const faceBottomLeftY = prediction.boundingBox.bottomRight[1];

            // NOT FLIPPED FOR mobile
            const faceTopRightX = video.width - prediction.boundingBox.topLeft[0]; // face is flipped horizontally so top left is actually top right.
            const faceTopRightY = prediction.boundingBox.topLeft[1];

            if (faceBottomLeftX > 0 && !isFaceRotated(prediction.annotations)) {
                const positionLeftIrisX = video.width - positionXLeftIris;
                const normalizedXIrisPosition = normalize(
                    positionLeftIrisX,
                    faceTopRightX,
                    faceBottomLeftX
                );
                console.log('face in view', prediction.faceInViewConfidence);
                console.log('X: ', normalizedXIrisPosition);
                if (normalizedXIrisPosition > 0.36) { // original 0.355
                    event = "RIGHT";
                } else if (normalizedXIrisPosition < 0.315) { //original 0.315
                    event = "LEFT";
                } else {
                    amountStraightEvents++;
                    if (amountStraightEvents > 8) {
                        event = "STRAIGHT";
                        amountStraightEvents = 0;
                    }
                }

                const normalizedYIrisPosition = normalize(
                    positionYLeftIris,
                    faceTopRightY,
                    faceBottomLeftY
                );
                console.log('normalized y: ', normalizedYIrisPosition)
                if (normalizedYIrisPosition > 0.64) {
                    event = "TOP";
                }
                console.log('event:', event);
            }
        });
    }
    return event;
}

async function loadModel() {
  model = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
    maxFaces: 1,
  });
};

const gaze = {
  loadModel: loadModel,
  getGazePrediction: renderPrediction,
};

export default gaze;
