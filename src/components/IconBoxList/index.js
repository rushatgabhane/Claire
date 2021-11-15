import React from 'react';
import {View, Text, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';
import IconBox from '../IconBox';

const propTypes = {
    /* Icons to display */
    iconBoxList: PropTypes.arrayOf(PropTypes.object).isRequired,

    // styles: PropTypes.

    /* Background color of the box*/
    backgroundColor: PropTypes.string,

    styles: PropTypes.object,
};

const defaultProps = {
    backgroundColor: colors.grey,
};

class IconBoxList extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.iconBoxList, this.props.styles}>
                {this.props.iconBoxList}
            </View>
        );
    }
}

IconBoxList.propTypes = propTypes;
IconBoxList.defaultProps = defaultProps;
IconBoxList.displayName = 'IconBoxList';

export default IconBoxList;
