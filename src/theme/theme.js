import {DefaultTheme} from '@react-navigation/native';
import colors from './colors';

const theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        primary: colors.black,
        background: colors.white,
        card: colors.primary,
        text: colors.black,
        border: colors.white,
        notification: colors.complement,
    },
};

export default theme;
