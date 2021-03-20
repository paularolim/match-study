import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 360;

const normalize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export default StyleSheet.create({
  match: {
    display: 'flex',
    alignItems: 'center',
  },
  cardProfile: {
    backgroundColor: '#C1549C',
    height: '70%',
    width: '80%',
    borderRadius: 10,
    marginTop: '5%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageProfileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageProfile: {
    height: '70%',
  },
  infoProfile: {
    backgroundColor: '#7E549F',
    padding: 15,
    alignSelf: 'stretch',
  },
  infoProfileTitle: {
    fontSize: normalize(20),
    color: '#FFCB3E',
    fontWeight: 'bold',
  },
  infoSubjects: {
    marginTop: '3%',
  },
  subjectTitle: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    color: '#f2f2f2',
  },
  subjectText: {
    fontSize: normalize(18),
    color: '#f2f2f2',
  },
  buttonGroup: {
    width: '80%',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#7E549F',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
