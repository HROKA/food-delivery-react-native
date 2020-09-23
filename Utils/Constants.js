import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const numberOfIcons = 5;
const horizontalPadding = 42;
const primaryColor = '#F04732';
const secondaryColor = '#767675';

// check the device type ios or android
const DEVICE = Platform.OS;
// app id for facebook signup and login
const APP_ID = '3516655361731728';

const DURATION = 450;
const PADDING = 16;
const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
const ICON_SIZE = SEGMENT - horizontalPadding;

const Colors = {
  primaryColor,
  secondaryColor,
};
const mainStyle = {
  fontFamily: '',
  deviceWidth: width,
  deviceHight: height,
};

export {
  DURATION,
  PADDING,
  SEGMENT,
  ICON_SIZE,
  Colors,
  mainStyle,
  DEVICE,
  APP_ID,
};
