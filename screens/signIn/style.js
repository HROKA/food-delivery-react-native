import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerImg: {
    width: '100%',
    flex: 0.7,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {},
  containerBtn: {
    justifyContent: 'center',
    width: '100%',
  },
  lineParagraph: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 1,
    width: '40%',
    borderWidth: 0.5,
  },
  facebookBtn: {
    backgroundColor: '#345E9E',
    width: '50%',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  facebookText: {
    color: 'white',
  },
  bottomButton: {
    marginBottom: 10,
  },
});
