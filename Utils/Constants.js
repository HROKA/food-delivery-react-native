import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const numberOfIcons = 5;
const horizontalPadding = 42;
const primaryColor = '#F04732';
const secondaryColor = '#767675';

const DURATION = 450;
const PADDING = 16;
const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
const ICON_SIZE = SEGMENT - horizontalPadding;

const Colors = {
  primaryColor,
  secondaryColor,
};
const mainStyle = {
  primaryColor,
  secondaryColor,
  fontFamily: '',
  deviceWidth: width,
  deviceHight: height,
};

export { DURATION, PADDING, SEGMENT, ICON_SIZE, Colors, mainStyle };
