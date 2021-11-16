import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

let model;
let event;
let positionXLeftIris;
let positionYLeftIris;
let amountStraightEvents = 0;

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
                return; // equivalent of continue
            }

            positionXLeftIris = prediction.annotations.leftEyeIris[0][0];
            positionYLeftIris = prediction.annotations.leftEyeIris[0][1];

            const faceBottomLeftX =
                video.width - prediction.boundingBox.bottomRight[0]; // face is flipped horizontally so bottom right is actually bottom left.
            const faceBottomLeftY = prediction.boundingBox.bottomRight[1];

            const faceTopRightX = video.width - prediction.boundingBox.topLeft[0]; // face is flipped horizontally so top left is actually top right.
            const faceTopRightY = prediction.boundingBox.topLeft[1];

            if (faceBottomLeftX > 0 && !isFaceRotated(prediction.annotations)) {
                const positionLeftIrisX = video.width - positionXLeftIris;
                const normalizedXIrisPosition = normalize(
                    positionLeftIrisX,
                    faceTopRightX,
                    faceBottomLeftX
                );
                if (normalizedXIrisPosition > 0.36) { // original 0.355
                    event = "RIGHT";
                } else if (normalizedXIrisPosition < 0.32) { //original 0.315
                    event = "LEFT";
                } else {
                    amountStraightEvents++;
                    if (amountStraightEvents > 4) {
                        event = "STRAIGHT";
                        amountStraightEvents = 0;
                    }
                }

                const normalizedYIrisPosition = normalize(
                    positionYLeftIris,
                    faceTopRightY,
                    faceBottomLeftY
                );
                if (normalizedYIrisPosition > 0.64) {
                    event = "TOP";
                }
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
