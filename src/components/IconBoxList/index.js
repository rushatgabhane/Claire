import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';
import IconBox from '../IconBox';

const propTypes = {
    /* Icons to display */
    iconBoxList: PropTypes.arrayOf(PropTypes.instanceOf(IconBox)).isRequired,

    // styles: PropTypes.

    /* Background color of the box*/
    backgroundColor: PropTypes.string,
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
            <View style={styles.iconList, {backgroundColor: this.props.backgroundColor} }>
                {/* {
                    this.props.iconBoxList.map((value, index, id) => {
                        <View key={id} />
                    })
                } */}
            </View>
        );
    }
}

IconBoxList.propTypes = propTypes;
IconBoxList.defaultProps = defaultProps;
IconBoxList.displayName = 'IconBoxList';

export default IconBoxList;
