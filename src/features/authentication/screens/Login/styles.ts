import {ScaledSheet} from 'react-native-size-matters';
import {setModerateVerticalScale, setModerateScale} from '@src/services/scale';
import {COLORS} from '@src/constants';

const styles = ScaledSheet.create({
  linearGradient: {
    flex: 1,
  },

  loginFormContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: setModerateVerticalScale(50),
    paddingHorizontal: setModerateScale(32),
    marginTop: -20,
    backgroundColor: COLORS.WHITE,
  },

  mainText: {
    fontSize: setModerateScale(24),
    fontFamily: 'Roboto-Medium',
    color: COLORS.LIGHT_BLACK,
  },

  additionalText: {
    fontSize: setModerateScale(14),
    marginTop: setModerateVerticalScale(5),
    color: COLORS.DARK_GRAY,
    fontFamily: 'Roboto-Regular',
  },

  formContainer: {
    marginTop: setModerateVerticalScale(30),
  },

  button: {
    backgroundColor: COLORS.DARK_BLUE,
    height: setModerateVerticalScale(40),
    borderRadius: 15,
    marginTop: setModerateVerticalScale(20),
    marginBottom: setModerateVerticalScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: COLORS.WHITE,
    fontFamily: 'Roboto-Medium',
  },

  inactiveButton: {
    backgroundColor: COLORS.MEDIUM_GRAY,
  },
});

export default styles;
