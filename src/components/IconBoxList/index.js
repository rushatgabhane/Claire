import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';

const propTypes = {
    /* Icons to display */
    iconBoxList: PropTypes.arrayOf(PropTypes.object).isRequired,

    /* Background color of the box*/
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    backgroundColor: colors.grey,
};

class IconBoxList extends React.PureComponent {
    render() {
        return (
            <View style={styles.iconBoxList}>
                {this.props.iconBoxList}
            </View>
        );
    }
}

IconBoxList.propTypes = propTypes;
IconBoxList.defaultProps = defaultProps;
IconBoxList.displayName = 'IconBoxList';

export default IconBoxList;
