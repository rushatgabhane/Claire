import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';
import PillBox from '../../components/PillBox';

const propTypes = {
    /** Direction of iris */
    gazeDirection: PropTypes.string,

    /* Background color of the box*/
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    gazeDirection: 'Initializing',
    backgroundColor: colors.grey,
};

class InfoBox extends React.PureComponent {
    render() {
        return (
            <View style={styles.infoBox}>
                <Text style={{
                    color: colors.black,
                    marginTop: 20,
                }}>
                    It's a beautiful day!
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
