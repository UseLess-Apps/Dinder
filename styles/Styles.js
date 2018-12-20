import { StyleSheet, Platform } from 'react-native';
import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

export default Styles = StyleSheet.create({
  // Home Screen styles
  homeText: {
    textAlign: 'center',
    backgroundColor: 'blue',
    marginTop: height * 0.1,
    color: 'white',
    fontSize: 50,
  },
  homeScreenContainer: {
    backgroundColor: 'red',
    height: height,
    flexDirection : 'column',
  },
  location: {
    height: height * 0.1,
    padding: 10,
    flex: 0.8,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  locationImage: {
    height: height * 0.1,
    flex: 0.2,
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: height * 0.2,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    height: height * 0.1,
  },
  // Food Types screen styles

  });