import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import styles from '../../styles';
import IconBoxList from '../../components/IconBoxList';
import {leftIcons, rightIcons} from '../../utils/DefaultIconBoxArray';
import InfoBox from '../../components/InfoBox';
import PillBox from '../../components/PillBox';
import {toggleIconBoxColor} from '../../utils';

class SpeakScreeen extends React.Component {
    constructor(props) {
        super(props);

        this.handleLookUp = this.handleLookUp.bind(this);
        this.handleLookLeft = this.handleLookLeft.bind(this);
        this.handleLookRight = this.handleLookRight.bind(this);
        this.handleIOTDevice = this.handleIOTDevice.bind(this);

        this.originalLeftIcons = leftIcons;
        this.originalRightIcons = rightIcons;

        this.state = {
            leftIcons: leftIcons,
            rightIcons: rightIcons,
            originalLeftIcons: leftIcons,
            originalRightIcons: rightIcons,
        }
    }
    // todo look up calls reset
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.gazePrediction === prevState.gazePrediction) {
    //         return;
    //     }
    //     if (this.leftIcons.length === 1 && this.rightIcons.length === 0) {
    //         if(this.state.gazePrediction === 'LEFT') {
    //             // handleIOTDevice();
    //             goBackToInitialState(key); // scan both arrays, if key matches -> toggle bg
    //             return;
    //         }
    //     }
    //     if (this.leftIcons.length === 0 && this.rightIcons.length === 1) {
    //         // same as above with right
    //     }
    //     if (this.state.gazePrediction != prevState.gazePrediction) {
    //         if (this.state.gazePrediction === 'LEFT') {
    //             const middleIndex = Math.ceil(this.leftIcons.length / 2);

    //             const newLeftIcons = this.leftIcons.slice().splice(0, middleIndex);   
    //             const newRightIcons = this.leftIcons.slice().splice(middleIndex, this.leftIcons.length);
    //             this.leftIcons = newLeftIcons;
    //             this.rightIcons = newRightIcons;
    //         }
    //     }
    // }

    handleLookUp() {
        this.setState({
            leftIcons: this.state.originalLeftIcons,
            rightIcons: this.state.originalRightIcons,
        });
    }

    handleLookLeft() {
        if (this.state.leftIcons.length === 0) {
            return;
        }

        if (this.state.leftIcons.length === 1 && this.state.rightIcons.length === 0) {
            this.handleIOTDevice(this.state.leftIcons[0]);
            return;
        }

        const middleIndex = Math.ceil(this.state.leftIcons.length / 2);
        const newLeftIcons = this.state.leftIcons.slice().splice(0, middleIndex);   
        const newRightIcons = this.state.leftIcons.slice().splice(middleIndex, this.state.leftIcons.length);

        this.setState({
            leftIcons: newLeftIcons,
            rightIcons: newRightIcons,
        });
    }

    handleLookRight() {
        if (this.state.rightIcons.length === 0) {
            return;
        }

        if (this.state.rightIcons.length === 1 && this.state.leftIcons.length === 0) {
            this.handleIOTDevice(this.state.rightIcons[0]);
            return;
        }

        const middleIndex = Math.ceil(this.state.rightIcons.length / 2);
        const newLeftIcons = this.state.rightIcons.slice().splice(0, middleIndex);   
        const newRightIcons = this.state.rightIcons.slice().splice(middleIndex, this.state.rightIcons.length);

        this.setState({
            leftIcons: newLeftIcons,
            rightIcons: newRightIcons,
        });
    }

    handleIOTDevice(iconBox) {
        const newIconBox = toggleIconBoxColor(iconBox);

        const leftIndex = this.state.originalLeftIcons.indexOf(iconBox);
        const rightIndex = this.state.originalRightIcons.indexOf(iconBox);

        let newLeftIcons = this.state.originalLeftIcons;
        let newRightIcons = this.state.originalRightIcons;

        if (leftIndex !== -1) {
            newLeftIcons[leftIndex] = newIconBox;            
        } else if (rightIndex !== -1) {
            newRightIcons[rightIndex] = newIconBox;
        }

        this.setState({
            originalLeftIcons: newLeftIcons,
            originalRightIcons: newRightIcons,
            leftIcons: newLeftIcons,
            rightIcons: newRightIcons,
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity
                    ref={touchable => this.infoBox = touchable}
                    onPress={this.handleLookUp}
                >
                    <InfoBox />
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
                                iconBoxList={this.state.leftIcons}
                            />
                        </TouchableOpacity>
                        <View style={styles.verticalSeperator} />
                        <TouchableOpacity
                            style={styles.w50}
                            onPress={this.handleLookRight}
                        >
                            <IconBoxList
                                iconBoxList={this.state.rightIcons}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SpeakScreeen;
