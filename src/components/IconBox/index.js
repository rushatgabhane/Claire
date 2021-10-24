import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';

const propTypes = {
    /* Icon to display inside box */
    icon: PropTypes.object.isRequired,

    /* Text to display under icon*/
    label: PropTypes.string.isRequired,

    /* Background color of the box*/
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    backgroundColor: colors.grey,
};


class IconBox extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.iconBox, {backgroundColor: this.props.backgroundColor} }>

            </View>
        );
    }
}

IconBox.propTypes = propTypes;
IconBox.defaultProps = defaultProps;
IconBox.displayName = 'IconBox';

export default IconBox;
