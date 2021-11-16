import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const propTypes = {
    /** Direction of iris */
    gazeDirection: PropTypes.string,
};

const defaultProps = {
    gazeDirection: 'Initializing',
};

class PillBox extends React.PureComponent {
    render() {
        return (
            <View style={styles.pillBox}>
                <View style={styles.arrows}>
                    <Ionicons name="arrow-back-sharp" size={24} color={colors.black} />
                    <Ionicons name="arrow-up-sharp" size={24} color={colors.black} />
                    <Ionicons name="arrow-forward-sharp" size={24} color={colors.black} />
                </View>
            </View>
        );
    }
}

PillBox.propTypes = propTypes;
PillBox.defaultProps = defaultProps;
PillBox.displayName = 'PillBox';

export default PillBox;
