import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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

class IconBox extends React.PureComponent {
    render() {
        return (
            <View style={{
                backgroundColor: this.props.backgroundColor,
                height: 120,
                width: 168,
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 8,
                marginTop: 20,
            }}>
                {this.props.iconName === 'fan' && <Image
                    style={styles.iconImage} 
                    source={require('../../../assets/fan.png')}
                />}
                {this.props.iconName === 'light' && <Image
                    style={styles.iconImage} 
                    source={require('../../../assets/light.png')}
                />}
                {this.props.iconName === 'emergency' && <Image
                    style={styles.iconImage} 
                    source={require('../../../assets/emergency.png')}
                />}
                {this.props.iconName === 'water' && <Image
                    style={styles.iconImage} 
                    source={require('../../../assets/water.png')}
                />}
                {this.props.iconName === 'toilet' && <Image
                    style={styles.iconImage} 
                    source={require('../../../assets/toilet.png')}
                />}
                {this.props.iconName === 'customMessage' && <Image
                    style={styles.iconImage} 
                    source={require('../../../assets/customMessage.png')}
                />}
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
