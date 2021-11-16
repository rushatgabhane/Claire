import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';
import PillBox from '../../components/PillBox';

const propTypes = {
    /* Background color of the box*/
    backgroundColor: PropTypes.string,

    text: PropTypes.string,
};

const defaultProps = {
    backgroundColor: colors.grey,
    text: 'It\'s a beautiful day!',
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
                <Text style={styles.infoBoxText}>Look up to dismiss</Text>
            </View>
        );
    }
}

InfoBox.propTypes = propTypes;
InfoBox.defaultProps = defaultProps;
InfoBox.displayName = 'InfoBox';

export default InfoBox;
