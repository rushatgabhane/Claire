import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';

const propTypes = {
    /* Background color of the box*/
    backgroundColor: PropTypes.string,

    text: PropTypes.string,

    boldText: PropTypes.string,
};

const defaultProps = {
    backgroundColor: colors.grey,
    text: 'It\'s a beautiful day!',
    boldText: 'Look up to dismiss',
};

class InfoBox extends React.PureComponent {
    render() {
        return (
            <View style={styles.infoBox}>
                <Text style={{
                    color: colors.black,
                    marginTop: 20,
                }}>
                    {this.props.text}
                </Text>
                <Text style={styles.infoBoxText}>{this.props.boldText}</Text>
            </View>
        );
    }
}

InfoBox.propTypes = propTypes;
InfoBox.defaultProps = defaultProps;
InfoBox.displayName = 'InfoBox';

export default InfoBox;
