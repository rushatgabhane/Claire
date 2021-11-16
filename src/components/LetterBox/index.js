import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';

const propTypes = {
    /* Text to display */
    text: PropTypes.string.isRequired,

    /* Background color of the box*/
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    backgroundColor: colors.grey,
};

class LetterBox extends React.PureComponent {
    render() {
        return (
            <View style={{
                backgroundColor: this.props.backgroundColor,
                height: 25,
                width: 100,
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 80,
                marginTop: 12,
            }}>
                <Text style={styles.letter}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

LetterBox.propTypes = propTypes;
LetterBox.defaultProps = defaultProps;
LetterBox.displayName = 'LetterBox';

export default LetterBox;
