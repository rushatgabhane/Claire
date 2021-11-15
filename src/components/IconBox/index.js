import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '../../theme';
import styles from '../../styles';

const propTypes = {
    /* Icon to display inside box */
    iconName: PropTypes.string.isRequired,

    /* Text to display under icon*/
    label: PropTypes.string.isRequired,

    /* Background color of the box*/
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    backgroundColor: colors.grey,
};


class IconBox extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <View style={{
                backgroundColor: this.props.backgroundColor,
                height: 120,
                width: 178,
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 8,
            }}>
                <Image
                    style={styles.iconImage} 
                    source={require(`../../../assets/light.png`)}
                />
                <Text style={styles.label}>
                    {this.props.label}
                </Text>
            </View>
        );
    }
}

IconBox.propTypes = propTypes;
IconBox.defaultProps = defaultProps;
IconBox.displayName = 'IconBox';

export default IconBox;
