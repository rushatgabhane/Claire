import React from 'react';
import IconBox from '../components/IconBox';
import {colors} from '../theme';

function toggleIconBoxColor(iconBox) {
    const newBackgroundColor = iconBox.props.backgroundColor === colors.primary ? colors.grey : colors.primary;
    return <IconBox 
        iconName={iconBox.props.iconName}
        label={iconBox.props.label}
        backgroundColor={newBackgroundColor}
        key={iconBox.key}
    />
}

export {
    toggleIconBoxColor,
};