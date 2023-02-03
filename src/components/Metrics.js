import {Dimensions} from 'react-native';

// It gives us access to three functions called horizontalScale,verticalScale, and moderateScale, which takes a single argument of type number.

const {width, height} = Dimensions.get('window');

const guideLineBaseWidth = 375;
const guideLineBaseHeight = 812;

//horizontalScale = width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal, likewise.
const horizontalScale = size => (width / guideLineBaseWidth) * size;

//verticalScale = height, marginTop, marginBottom, marginVertical, line-height,paddingTop, paddingBottom, paddingVertical,likewise.
const verticalScale = size => (height / guideLineBaseHeight) * size;

//moderateScale = font-size, borderRadius, Likewise.
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
